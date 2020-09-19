export const config = {
    "postgress": {
        "username": "udagramloretodev",
        "password": "udagramloretodev",
        "database": "udagramloretodev",
        "host": "udagramloretodev.cdcv3tlk8exq.ap-southeast-1.rds.amazonaws.com",
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
