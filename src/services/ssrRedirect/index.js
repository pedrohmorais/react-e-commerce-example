const ssrInject = ({url, res, statusCode}) => {
  const redirectStatusCode = statusCode || 302;

  if (res && url) {
    res.writeHead(redirectStatusCode, {
      Location: url,
    })
    res.end()
  }
}

export default ssrInject;
