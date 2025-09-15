# nodejsapibolerplate

# For Deployment on vercel added this piece of code
{
    "version": 2,
    "builds": [
        { "src": "index.js", "use": "@vercel/node" }
    ],
    "routes": [
        { "src": "/(.*)", "dest": "index.js" }
    ]
}