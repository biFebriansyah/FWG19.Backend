const db = require('../config/db')
const escape = require('pg-format')
const slugs = require('../utils/slug')
const model = {}

model.getData = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.product ORDER BY created_at DESC')
            .then((res) => {
                if (res.rows <= 0) {
                    resolve('data not found')
                } else {
                    resolve(res.rows)
                }
            })
            .catch((er) => {
                reject(er)
            })
    })
}

model.getBySlug = (slugs) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.product WHERE slug = $1 ', [slugs])
            .then((res) => {
                if (res.rows <= 0) {
                    resolve('data not found')
                } else {
                    resolve(res.rows)
                }
            })
            .catch((er) => {
                reject(er)
            })
    })
}

model.getBy = async ({ page, limit, orderBy, search }) => {
    try {
        let filterQuery = ''
        let orderQuery = ''
        let metaQuery = ''
        let count = 0


        if (search) {
            filterQuery += search ? escape('AND product_name = %L', search) : ''
        }

        if (orderBy) {
            orderQuery += escape('ORDER BY %s', orderBy)
        }

        if (page && limit) {
            const offset = (page - 1) * limit
            metaQuery += escape('LIMIT %s OFFSET %s', limit, offset)
        }

        db.query(
            `SELECT COUNT(mv.product_id) as "count" FROM public.product mv WHERE true ${filterQuery}`
        ).then((v) => {
            count = v.rows[0].count
        })

        const data = await db.query(`
        SELECT 
            product_id,
            product_name,
            slug,
            product_type,
            price, image,
            created_at,
            updated_at
        FROM public.product
        WHERE true ${filterQuery}
        ${orderQuery} ${metaQuery}
        `)

        const meta = {
            next: count <= 0 ? null : page == Math.ceil(count / limit) ? null : Number(page) + 1,
            prev: page == 1 ? null : Number(page) - 1,
            total: count
        }

        if (data.rows <= 0) {
            return 'data not found'
        }

        return { data: data.rows, meta }

    } catch (error) {
        throw error
    }
}

model.save = ({ name, type, price, image }) => {
    const sluges = slugs(name)
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO public.product
        (product_name, slug, product_type, price, image)
        VALUES($1, $2, $3, $4, $5)`,
            [name, sluges, type, price, image]
        )
            .then((res) => {
                resolve(`${res.rowCount} products created`)
            })
            .catch((er) => {
                reject(er)
            })
    })
}

module.exports = model
