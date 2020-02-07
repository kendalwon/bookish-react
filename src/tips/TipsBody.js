import React from 'react';
import './TipsBody.css';
import CouchImg from "../images/couch-reader.jpeg";
import {Link} from 'react-router-dom';

function TipsBody() {
  return (
    <div>
      <section className="main">
        <ul className="articleList" >
            <li className="articleItem">
              <h1 className="articleTitle">Thinking about starting a reading log? Here's why you should.</h1>
              <p className="articleDate">November 16, 2018</p>
              <p className="articleContent">A reading log is a great way to get your kids excited about and invested in what they’re reading. Whether it’s a young reader who just painstakingly prints out the titles of books she has finished or an older one who writes a concise synopsis of their recent reads, kids benefit from reviewing what they’ve read.<br /><br />
              As kids get older, a reading log can really help to open up a dialog with your child about their opinions and emotions. You might be surprised what you learn about each other as you discuss books together.<br /><br />
              Getting started with a reading log is simple. You can find plenty of nice options to buy, such as <a className="contentLink" href="https://www.amazon.com/Bookworm-Journal-Reading-Their-Parents/dp/0307408264" target="_blank" rel="noopener noreferrer">this one</a>. Or you could make a fun afternoon activity out of it and make one with your child. Either way, starting a reading log for your child is a no-brainer.
              </p>
            </li>
            <li className="articleItem">
              <img id="couchImg" src={CouchImg} alt="Couch Reader" />
              <h1 className="articleTitle">Should my child read before kindergarten?</h1>
              <p className="articleDate">October 8, 2018</p>
              <p className="articleContent">
              Ah, the age-old question. Early childhood is a time of exploration, learning and fun. But parents today worry about things like kindergarten-readiness more than ever before. What if your child is the only kid in his kindergarten class who can’t read? Surely, he’ll be behind from the start! <br /><br />
              Fear not, loving parents. Good readers are not always early readers. It is not imperative that your child be reading before they set foot in elementary school. But there are some things you can do to help your child be prepared to learn to read once she starts school.<br /><br />
              Reading to your kids is the best way to foster a love of reading in them. Teach them to hold a book properly and point to the words as you read them. Kids will easily pick up that words flow left-to-right and top-to-bottom on the page. Make them aware of letters and the sounds they make. Have a letter scavenger hunt in books and around the house. Make reading fun and your child will be motivated to read independently.    
              </p>
            </li>
            <li className="articleItem">
              <h1 className="articleTitle">How to start teaching your child to read</h1>
              <p className="articleDate">February 14, 2019</p>
              <p className="articleContent">So you think your child is ready to learn to read, but you’re not sure where to start? I taught my kids to read at home and without much fuss. First, wait until your child is interested in reading and able to concentrate for more than a few minutes. When this seems to be the case, it’s time to make sure your child knows all the letter in uppercase and lowercase. Puzzles and matching games make this review fun for kids.<br /><br />
              Next comes letter sounds. Go over each letter and the sound it makes whenever you can. This is likely easier than it sounds – you can work it into any conversation with your child. Just emphasize the beginning sounds of words (“Aaaaa-pple starts with A!”) and your kid will soon know them all. Then she’ll be ready to start decoding words on her own!<br /><br />
              I like to start with Bob Books, <a className="contentLink" href="https://www.amazon.com/Complete-Set-Books-Sets-books/dp/B001KIZMEU" target="_blank" rel="noopener noreferrer">found here</a>, as they’re simple and short and give kids a sense of accomplishment when they finish. Soon, your child will be ready for more interesting titles. Make sure you keep your bookshelves stocked with whatever he’s interested in to encourage him to keep reading!
            </p>
          </li>
        </ul>
      </section>
      <section className="archive">
        <h1 className="archiveHeading">more articles</h1>
        <ul className="archiveList">
          <li className="archiveItem">
            <Link to="/tips" className=" archiveLink">The million-word gap</Link>
            <p className="archiveDate">July 17, 2018</p></li>
          <li className="archiveItem">
            <Link to="/tips" className=" archiveLink">Best books for babies</Link>
            <p className="archiveDate">November 21, 2018</p></li>
          <li className="archiveItem">
            <Link to="/tips" className=" archiveLink">Literacy games to play in the car</Link>
            <p className="archiveDate">July 31, 2018</p></li>
          <li className="archiveItem">
            <Link to="/tips" className=" archiveLink">Interactive books your kids will love</Link>
            <p className="archiveDate">October 22, 2017</p></li>
        </ul>
      </section>
    </div>
  );
};

export default TipsBody;