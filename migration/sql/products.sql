CREATE TABLE public.product (
	product_id serial NOT NULL,
	product_name varchar NOT NULL,
	slug varchar NOT NULL,
	product_type varchar NOT NULL,
	price integer NOT NULL,
	image varchar NULL,
	created_at timestamp without time zone NULL DEFAULT now(),
	updated_at timestamp without time zone NULL,
	CONSTRAINT product_pk PRIMARY KEY (product_id)
);