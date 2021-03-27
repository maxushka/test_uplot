import React from 'react';
import MapCustom from '../../../components/map-custom/MapCustom'



export default () => (
  <React.Fragment>
  <h2 className={'content-block'}>Настройки объектов наблюдения</h2>
  <div className={'content-block'}>
    <div className={'dx-card responsive-paddings'}>
        <p>
            Здесь можно будет выбрать или добавить новый объект наблюдения c помощью маркера на карте.
            При активации маркера внизу будут поля, в которых будет отображаться информаци об объекте:
                Название, расположение, количество этажей и т.п.
                Будут поля для загрузки планов этажей и расположения приемников.
        </p>
        <MapCustom/>
    </div>
  </div>
</React.Fragment>
);
