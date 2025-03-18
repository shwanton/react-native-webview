import NativeRNCWebViewModule from './NativeRNCWebViewModule';
import { Double } from 'react-native/Libraries/Types/CodegenTypes';

const shouldStartLoadWithLockIdentifier = (shouldStart: boolean, lockIdentifier: Double): void => {
    NativeRNCWebViewModule.shouldStartLoadWithLockIdentifier(
        shouldStart,
        lockIdentifier
      );
}

const isFileUploadSupported = (): Promise<boolean> => {
    return NativeRNCWebViewModule.isFileUploadSupported();
}

const getCustomCertificateKeychainAlias = (): string | null => {
    return NativeRNCWebViewModule.getCustomCertificateKeychainAlias() ;
}

const setCustomCertificateKeychainAlias = (alias: string) => {
    NativeRNCWebViewModule.setCustomCertificateKeychainAlias(alias);
}

const WebViewModule = {
    shouldStartLoadWithLockIdentifier,
    isFileUploadSupported,
    setCustomCertificateKeychainAlias,
    getCustomCertificateKeychainAlias,
}

export default WebViewModule
