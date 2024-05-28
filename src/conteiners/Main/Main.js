// Импорт изображения для компонента
import main from "../../media/main.jpg" 
// Импорт файлов стилей для компонента
import classes from './Main.module.css'
// Импорт компонента Button для использования в этом компоненте
import Button from './../../components/UI/Button/Button';
// Импорт хука useNavigate для программной навигации
import { useNavigate } from "react-router-dom";

// Основной компонент, который выводит на главной странице
function Main(){
    // Используем хук useNavigate для получения функции навигации
    let navigate = useNavigate()

    // Обработчик клика на кнопку, который перенаправит пользователя на указанный URL
    const handleButtonClick = (redirect) => {
        navigate(redirect)
    }

    // JSX разметка для компонента
    return(
        // Контейнер основного компонента
        <div className={classes.Main}>
            {/* Основное изображение для компонента */}
            <img src={main} alt="Описание изображения" />
            {/* Контейнер для текста и кнопок */}
            <div className={classes.Prev}>
                {/* Левая колонка с описанием */}
                <div className={classes.PrevLeft}>
                    <p>Откройе для себя уникальность нашего натурального меда.</p>
                </div>
                {/* Правая колонка с описанием и кнопками */}
                <div className={classes.PrevRight}>
                    <p>Насладитесь изысканным вкусом и ароматом нашего меда высшего качества.</p>
                    {/* Контейнер для кнопок */}
                    <div className={classes.PrevRightBotton}>
                        {/* Кнопка перехода на страницу "О нас" */}
                        <Button onClick={() => handleButtonClick('/about')} value="О нас" />
                        {/* Кнопка перехода в магазин */}
                        <Button onClick={() => handleButtonClick('/counter')} value="В магазин" />
                    </div>
                </div>
            </div>
        </div>
    )
}

// Экспорт компонента для использования в других частях приложения
export default Main
