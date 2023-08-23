interface props {
    label: string;
}

export const ModalNotWork = ({ label }: props) => (
    <>
        <div className="absolute top-20 left-0 z-40 right-0 m-auto w-[400px] p-3 bg-white rounded-md">
            <h1 className="font-Montserrat text-lg font-medium">{ label }</h1>
        </div>

        <div className='absolute top-0 left-0 z-30 w-screen h-screen bg-[#00000020]'></div>
    </>
)