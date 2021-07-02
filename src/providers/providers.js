const fetcher = async (url) => {
  return await wretch(url)
    .get()
    .json(json => json);
}

export const providers = {
  fetcher: fetcher,
}
