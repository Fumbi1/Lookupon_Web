import Button from "../button/page"
import Image from "next/image";
import "./edit.css";

const EditModal = ({ Header, onChange, saveModal, textUpdate }) => {
    return (
        <div className="modal-wrapper">
            <div className="input-wrapper">
                <p className="modal-header">
                    {Header}
                </p>
                <div>
                    {Header === "Add photo" && (<div className="file-div">
                        <Image src={"camera.svg"} width={24} height={24} alt="photo" />
                        <div className="file-wrapper">
                            <input type="file" accept="image/*" onChange={onChange} multiple />
                        </div>
                    </div>)}

                    {Header === "Description" && (<textarea rows={10} cols={10} onChange={textUpdate} />)}

                    {Header === "Bisiness Hours" && (<div>
            
                        <hr />
            
                        <div>
                            <div>
                                <p>Day</p>
                                <div></div>
                            </div>
            
                            <div>
                                <p>Opening hour</p>
                                <div></div>
                            </div>
            
                            <div>
                                <p>Closing hour</p>
                                <div></div>
                            </div>
                        </div>
                    </div>)
                    }
                </div>

                <div>
                    <Button value={"Save"} className={"save-modal"} onClick={saveModal} />
                    <Button value={"Cancel"} className={"cancel-modal"} />
                </div>
            </div>
        </div>
    )
}

export default EditModal;