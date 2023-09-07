import { BaseModal } from "./BaseModal";

interface props {
    label: string;
}

export const ModalNotWork = ({ label }: props) => (
    <>
        <BaseModal>
            <h1 className="font-Montserrat text-lg font-medium">{ label }</h1>
        </BaseModal>

        <div className='absolute top-0 left-0 z-30 w-screen h-screen bg-[#00000020]'/>
    </>
)