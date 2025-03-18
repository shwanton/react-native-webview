import type NativeRNCWebViewModule from './NativeRNCWebViewModule';

// This "dummy" WebViewModule is for unsupported platforms,
const WebViewModule = {} as typeof NativeRNCWebViewModule;

export default WebViewModule;