module.exports = (str) => {
    let slug = str.toLowerCase().replace(/\s+/g, "-")
    slug = slug.replace(/[^\w-]+/g, "")
    slug = slug.replace(/-+/g, "-")

    return slug
}