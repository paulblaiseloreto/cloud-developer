export const config = {
    "postgress": {
        "username": process.env.POSTGRESS_USERNAME,
        "password": process.env.POSTGRESS_PASSWORD,
        "database": process.env.POSTGRESS_DATABASE,
        "host": process.env.POSTGRESS_HOST,
        "dialect": "postgress",
    },
    "aws": {
        "aws_region": process.env.AWS_REGION,
        "aws_profile": process.env.AWS_PROFILE,
        "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
    },
    "dev": {
        "username": "",
        "password": "",
        "database": "",
        "host": "",
        "dialect": "postgres",
        "aws_region": "us-east-2",
        "aws_profile": "default",
        "aws_media_bucket": "udagram-ruttner-dev"
    },
    "prod": {
        "username": "",
        "password": "",
        "database": "udagram_prod",
        "host": "",
        "dialect": "postgres"
    }
}
