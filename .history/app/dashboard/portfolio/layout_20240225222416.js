import StoreProvider from '@/app/redux/StoreProvider'

export default function Layout({ children }) {
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    );
}