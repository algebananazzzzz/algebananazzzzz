output "origin_bucket_name" {
  value = module.cloudfront_s3_origin.new_bucket.bucket
}

output "cloudfront_distribution_id" {
  value = module.cloudfront_s3_origin.distribution.id
}
