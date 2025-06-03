import WebView from './lib/WebView';
import WebViewModule from './lib/WebViewModule'

const {
  isFileUploadSupported,
  setCustomCertificateKeychainAlias,
} = WebViewModule;

export {
  WebView,
  isFileUploadSupported,
  setCustomCertificateKeychainAlias
};
export default WebView;
