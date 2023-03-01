import '../scss/modal.scss';
import { FC } from 'react';

interface modal {
    active:any
    setActive:any
 }
export const Modal: FC <modal> = ({active, setActive}) => {
    return(
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
                    <div className='modal-header'>
                        <p>Создание публикации</p>
                        <button>Далее</button>
                    </div>
                    <div className='line'></div>
                    <div className='modal-body'>
                        <p>Перетащите сюда фото и видео</p>
                        <label className='input-file'>
                        <input  type="file" name='file' />
                        <span>Выбрать на компьютере</span>
                        </label>
                    </div>
            </div>
        </div>
    )
}