import React, {useState,useEffect} from 'react'
import Histogram from 'react-chart-histogram';
import './main.css'
function Main(){

    const [tag,settag] = useState('');
    const [tagdata,settagdata] = useState({});
 
    const takeData = async(event)=>{
        const hashtag = event.target.value
        settag(hashtag)
        event.preventDefault()
    }

    const findData = async(event) => {
        event.preventDefault()
        await fetch(`https://twitter-sa-api.herokuapp.com/?query=${tag}`)
        .then((response) => response.json())
        .then(data => {
            settagdata(data)
            setPlot([data["Sentiment"]["positive"],data["Sentiment"]["negative"],data["Sentiment"]["neutral"]])
            setAuthor([data["Tweets"]["tweets"][0]["name"],data["Tweets"]["tweets"][1]["name"],data["Tweets"]["tweets"][2]["name"],data["Tweets"]["tweets"][3]["name"],data["Tweets"]["tweets"][4]["name"]])
            setTweetdata([data["Tweets"]["tweets"][0]["Tweet_Text"],data["Tweets"]["tweets"][1]["Tweet_Text"],data["Tweets"]["tweets"][2]["Tweet_Text"],data["Tweets"]["tweets"][3]["Tweet_Text"],data["Tweets"]["tweets"][4]["Tweet_Text"]])
        });
    }
    const labels = ['Positive', 'Negative', 'Neutral'];
    const [plotdata,setPlot] = useState([0,0,0]);
    const [author,setAuthor] = useState(["User1","User2","User3","User4","User5"])
    const [tweetdata,setTweetdata] = useState(["Tweet1","Tweet2","Tweet3","Tweet4","Tweet5"])
    const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };
    
    console.log(tagdata)
    return(
        <div className="main">
          <div className="form">
            <h1>Enter Your HASHTAG : </h1><br/>
            <form>
                <input className="input" type="text" placeholder='HASHTAG' value = {tag} onChange={takeData}/><br/><br/><br/><br/>
                <button onClick={findData} className="submit">Submit</button>
            </form>
          </div>
          <div className="plot">
                <Histogram
                     xLabels={labels}
                     yValues={plotdata}
                     width='400'
                     height='200'
                     options={options}
                />
                 <table>
                    <tr>
                       <th>Author</th>
                       <th>Tweet</th>
                    </tr>
                    <tr>
                        <td>{author[0]}</td>
                        <td>{tweetdata[0]}</td>
                    </tr>
                    <tr>
                        <td>{author[1]}</td>
                        <td>{tweetdata[1]}</td>
                    </tr>
                    <tr>
                        <td>{author[2]}</td>
                        <td>{tweetdata[2]}</td>
                    </tr>
                    <tr>
                        <td>{author[3]}</td>
                        <td>{tweetdata[3]}</td>
                    </tr>
                    <tr>
                        <td>{author[4]}</td>
                        <td>{tweetdata[4]}</td>
                    </tr>
                </table>
          </div>
        </div>
    )
}

export default Main;
