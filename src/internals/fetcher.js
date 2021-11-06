const fetcher = async (url, init) => {
  const res = await fetch(url, init);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");

    try {
      error.info = await res.clone().json();
    } catch (e) {
      error.info = { error: await res.text() };
    }

    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default fetcher;
