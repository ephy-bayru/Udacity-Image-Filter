export const config = {
  "dev": {
    "username": "udagramdev",
    "password": "udagramdev",
    "database": "udagramdev",
    "host": "udagramdev.caztkzytqpkj.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ephy-dev"
  },
  "jwt": {
    "secret": "HelloWorldJWT",
  },
  "prod": {
    "username": "udagramdev",
    "password": "udagramdev",
    "database": "udagramdev",
    "host": "",
    "dialect": "postgres"
  }
}

// "username": process.env.POSTGRESS_USERNAME,
// "password": process.env.POSTGRESS_PASSWORD,
// "database": process.env.POSTGRESS_DATABASE,
// "host": process.env.POSTGRESS_HOST,
// "dialect": "postgres",
// "aws_region": process.env.POSTGRESS_AWS_REGION,
// "aws_profile": process.env.POSTGRESS_AWS_PROFILE,
// "aws_media_bucket": process.env.POSTGRESS_AWS_MEDIA_BUCKET