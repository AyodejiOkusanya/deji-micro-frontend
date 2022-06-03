export const retry = (fn: () => Promise<any>, retries = 3, interval = 1000) => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error: Error) => {
        setTimeout(() => {
          if (retries < 1) {
            reject(error);
          } else {
            console.log(
              `retry no. ${retries} for dynamic import of ${fn.name}`
            );
            retry(fn, retries - 1, interval).then(resolve, reject);
          }
        }, interval);
      });
  });
};
