import { useState } from "react";

export const useOnlyRejected = () => {
    const [onlyRejected, setOnlyRejected] = useState(false);
    const onOnlyRejected = () => setOnlyRejected(!onlyRejected);

    return { onlyRejected, onOnlyRejected };
}