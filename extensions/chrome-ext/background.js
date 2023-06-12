
const toggle = () => {
  const pipe = (...fns) => x => fns.reduce((v, f) => v.then(f), Promise.resolve(x));

  const storeGet = async () => {
    return await chrome.storage.local.get(["isRed"]).then((result) => {
      console.log("Value currently is " + result.isRed);
      return result.isRed
    }) || false;
  };

  const storeSet = (value) => {
    chrome.storage.local.set({ "isRed": value }).then(() => {
      console.log("Value is set to " + value);
    });
  };

  const toggleRed = async (isRed) => {
    function redden() {
      document.body.style.backgroundColor = 'red';
    }
    function whiten() {
      document.body.style.backgroundColor = 'white';
    }
    try {
      isRed ? whiten() : redden();
      console.log(`isred ${isRed}`)
      return !isRed
    } catch (e) {
      console.log('err', e)
      console.log('this', this)
    }
  };

  pipe(storeGet, toggleRed, storeSet)()
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: toggle
    });
  }
});