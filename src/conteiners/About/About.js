import Logo from '../../components/header/Logo/Logo'
import classes from './About.module.css'
import about from '../../media/about.jpg'
import indi1 from '../../media/indi1.png'
import indi2 from '../../media/indi2.png'
import indi3 from '../../media/indi3.png'
import indi4 from '../../media/indi4.png'

function About(){
    

    return(
        <div className={classes.About}>
            <div className={classes.AboutHeader}>О нас</div>
            <div className={classes.AboutTop}>
                <div className={classes.AboutTopLeft}>
                    <p className={classes.AboutTopLeftP1}>«Медовая Гармония»</p>
                    <p className={classes.AboutTopLeftP2}>Это не просто мед, это любовь к природе и забота о здоровье каждого клиента.</p>
                    <div className={classes.Logo}><Logo/></div>
                </div>
                <div className={classes.AboutTopRight}>
                    <p>Компания "Медовая Гармония" является семейным бизнесом, который с гордостью предлагает широкий ассортимент натурального меда высочайшего качества. Наша фирма находится в живописном регионе, где пчелы собирают нектар с разнообразных цветущих растений, что позволяет нам предложить уникальные вкусы и ароматы меда.</p>
                    <p>Мы строго следим за всем процессом производства — от сбора нектара до розлива меда в банки — чтобы наши клиенты получали только чистый и натуральный продукт. "Медовая Гармония" обеспечивает полный цикл устойчивого пчеловодства, что включает заботу о здоровье пчел и поддержание баланса в природной среде.</p>
                    <p>Мы предлагаем различные виды меда: от классического цветочного до эксклюзивных сортов, таких как липовый, гречишный и акациевый. Каждый сорт меда имеет свои неповторимые лечебные и вкусовые качества, которые оценят как гурманы, так и те, кто ищет натуральные и полезные продукты.</p>
                </div>
            </div>
            <div className={classes.AboutBottom}>
                <div className={classes.AboutBottomLeft}>
                    <p>Наши преимущества</p>
                    <div className={classes.AboutBottomIndicators}>
                        <div className={classes.IndicatorsTop}>
                            <div><img src={indi1}/><p>Экологичность</p></div><div><img src={indi2}/><p>Много Сортов</p></div>
                        </div>
                        <div className={classes.IndicatorsBottom}> 
                            <div><img src={indi3}/><p>Ручной Сбор</p></div><div><img src={indi4}/><p>Более 30 лет на рынке</p></div>
                        </div>
                    </div>
                </div>
                <div className={classes.AboutBottomRight}><img src={about}/></div>
            </div>
        </div>        
    )
}
export default About