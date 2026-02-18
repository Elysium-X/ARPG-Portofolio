import { useState, useCallback } from 'react'

/**
 * Shared hook for Caps Lock detection on input fields.
 * Returns { isCapsLock, capsLockHandlers } to spread onto the input element.
 */
export function useCapsLock() {
    const [isCapsLock, setIsCapsLock] = useState(false)

    const checkCapsLock = useCallback((e) => {
        if (e.getModifierState) {
            setIsCapsLock(e.getModifierState('CapsLock'))
        }
    }, [])

    const capsLockHandlers = {
        onKeyUp: checkCapsLock,
        onClick: checkCapsLock,
        onBlur: () => setIsCapsLock(false),
    }

    return { isCapsLock, capsLockHandlers }
}
