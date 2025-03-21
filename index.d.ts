import { IOSWebViewProps, AndroidWebViewProps, MacOSWebViewProps, WindowsWebViewProps } from './lib/WebViewTypes';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import {Spec as WebViewModules} from './lib/NativeRNCWebViewModule'

export { FileDownload, WebViewMessageEvent, WebViewNavigation } from "./lib/WebViewTypes";

export type WebViewProps = IOSWebViewProps & AndroidWebViewProps & MacOSWebViewProps & WindowsWebViewProps;

declare const isFileUploadSupported: WebViewModules['isFileUploadSupported'];
declare const setCustomCertificateKeychainAlias: WebViewModules['setCustomCertificateKeychainAlias'];

declare const WebView: ForwardRefExoticComponent<WebViewProps & RefAttributes<WebViewInstance>>;

interface WebViewInstance {
    /**
     * Go back one page in the webview's history.
     */
    goBack: () => void;

    /**
     * Go forward one page in the webview's history.
     */
    goForward: () => void;

    /**
     * Reloads the current page.
     */
    reload: () => void;

    /**
     * Stop loading the current page.
     */
    stopLoading(): void;

    /**
     * Executes the JavaScript string.
     */
    injectJavaScript: (script: string) => void;

    /**
     * Focuses on WebView rendered page.
     */
    requestFocus: () => void;
    
    /**
     * Posts a message to WebView.
     */
    postMessage: (message: string) => void;
    
    /**
     * (Android only)
     * Removes the autocomplete popup from the currently focused form field, if present.
     */
    clearFormData?: () => void;

    /**
     * (Android only)
     * Clears the resource cache. Note that the cache is per-application, so this will clear the cache for all WebViews used.
     */
    clearCache?: (clear: boolean) => void;

    /**
     * (Android only)
     * Tells this WebView to clear its internal back/forward list.
     */
    clearHistory?: () => void;
}

export { WebView, isFileUploadSupported, setCustomCertificateKeychainAlias };
export default WebView;
