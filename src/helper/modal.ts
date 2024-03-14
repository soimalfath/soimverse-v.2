export function openModal(idModal: string) {
    const modalElement = document.getElementById(idModal) as HTMLInputElement;
    if (modalElement) {
        modalElement.checked = true;
    }
}

export function closeModal(idModal: string) {
    const modalElement = document.getElementById(idModal) as HTMLInputElement;
    if (modalElement) {
        modalElement.checked = false;
    }
}
