import '../scss/modall.scss';
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { setStep } from "../store/reducers/post/postSlice"
import stepBackArrow from "../assets/arrow.svg"
import { useState } from 'react';
import emojis from '../assets/emojis.svg';

export const Modall = () => {
    const {step} = useAppSelector(state => state.post);
    const dispatch = useAppDispatch()
    const [image, setImage] = useState<any>(null)
    const [description, setDescription] = useState<string>('')
    console.log(image);
    
    const user = useAppSelector((state) => state.user.user);

    const handleStep = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, step: number) => {
        if(step === 2 && !image) {
            setStep(1)
        }else{
          e.stopPropagation()
          dispatch(setStep(step))  
        }
        
    }

    const handleImage = (img: any) => {
        if(img) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result)
            }
            reader.readAsDataURL(img)

        }
    }

    return(
        <div className="modal-window">
        <div className="white-space">
            {step === 1 &&
            <div className='first-step'>
                <div className='modal-header'>
                    <div className="modal-header-p">Создание публикации</div>
                    <div className="next-button" onClick={(e) => handleStep(e, 2)}>Далее</div>
                </div>
                <div className='line'></div>
                <div className='modal-body'>
                    <p>Перетащите сюда фото и видео</p>
                    <label className='input-file'>
                        <input  type="file" name='file' onChange={(e) => handleImage(e.target.files![0])}/>
                        <div className="select-file">Выбрать на компьютере</div>
                    </label>
                </div>
            </div>}
            
            {step === 2 &&
            <div className="second-step">
                <div className='modal-header'>
                    <div className="step-back-arrow" onClick={(e) => handleStep(e, 1)}><img src={stepBackArrow} alt="" /></div>
                    <div className="modal-header-p">Создание публикации</div>
                    <div className="next-button" onClick={(e) => handleStep(e, 0)}>Поделиться</div>
                    
                </div>
                <div className='line'></div>
                <div className='modal-content'>
                   <div className='modal-content-picture'>
                        <div>
                            { image && <img src={image} alt="" /> }
                        </div>
                   </div>

                   <div className='modal-content-info'>
                    <div className='modal-content-info-block'>
                        <div className='modal-content-info-block-avatar'>
                            <img src={user.avatar} alt="" />
                        </div>
                        <div className='modal-content-info-block-username'>
                            <p>{user.username}</p> 
                        </div>
                    </div>
                    <div className='modal-content-textarea'>
                        <textarea maxLength={2200} value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Добавьте подпись...'></textarea>
                        <div className='emoji-and-length'>
                            <div>
                             <img src={emojis} alt="" />   
                            </div>
                            <div>
                               <p>{description.length}/2,200</p> 
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>}
        </div>
        <div className="toner" onClick={() => dispatch(setStep(0))}></div>
    </div>
    )
}