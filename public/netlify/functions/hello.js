// hello.js

// This exports the 'handler' function, which is the entry point for Netlify.
exports.handler = async (event, context) => {
  try {
    // You can optionally check for a query parameter named 'name'
    const name = event.queryStringParameters.name || 'World';

    // A successful function must return an object with a statusCode and a body.
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello, ${name}! Your function is working.`
      })
    }
  } catch (error) {
    // Return a 500 error if the function fails
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Function failed' })
    }
  }
}
