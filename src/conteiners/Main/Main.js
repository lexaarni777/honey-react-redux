import main from "../../media/main.jpg"
import classes from './Main.module.css'
import Button from './../../components/UI/Button/Button';
function Main(){
    return(
        <div className={classes.Main}>
            <img src={main}/>
            <div className={classes.Prev}>
                <div className={classes.PrevLeft}>
                    <p>Откройе для себя уникальность нашего натурального меда.</p>
                </div>
                <div className={classes.PrevRight}>
                    <p>Насладитесь изысканным вкусом и ароматом нашего меда высшего качества.</p>
                    <div className={classes.PrevRightBotton}> 
                        <Button
                            
                            value="О нас"
                        ></Button>
                        <Button
                            
                            value="В магазин"
                        ></Button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Main