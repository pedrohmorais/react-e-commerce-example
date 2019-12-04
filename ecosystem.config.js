module.exports = {
  apps: [
    {
      name: 'Front',
      script: './server.js',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        "NODE_PATH":"src/",
        "NODE_ENV":"development",
        "WHERE":".dev",
        "REACT_APP_API_URL":"http://airsoftcommunity.com.br:21049",
        "REACT_APP_API_TOKEN":"4r$0fity",
        "REACT_APP_S3_LOGOS_BUCKET": "https://airsoft-community-fields-logos.s3.amazonaws.com",
        "REACT_APP_S3_ASSETS_BUCKET": "https://airsoft-community-assets.s3-sa-east-1.amazonaws.com",
        "REACT_APP_GOOGLE_MAPS_TOKEN": "AIzaSyCKqT_CySbCOmTkL9IpK_8rKxCUgDjep3Y",
      },
      env_production: {
        "NODE_PATH":"src/",
        "NODE_ENV":"development",
        "WHERE":".dev",
        "REACT_APP_API_URL":"http://airsoftcommunity.com.br:21049",
        "REACT_APP_API_TOKEN":"4r$0fity",
        "REACT_APP_S3_LOGOS_BUCKET": "https://airsoft-community-fields-logos.s3.amazonaws.com",
        "REACT_APP_S3_ASSETS_BUCKET": "https://airsoft-community-assets.s3-sa-east-1.amazonaws.com",
        "REACT_APP_GOOGLE_MAPS_TOKEN": "AIzaSyCKqT_CySbCOmTkL9IpK_8rKxCUgDjep3Y",
      }
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'ftp.nodejs7603.kinghost.net',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/front',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js'
    }
  }
};
