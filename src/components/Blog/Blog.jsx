
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog,handleBookmarks,handleReadingTime }) => {
    const {title, cover, reading_time, author, author_img,posted_date,hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleBookmarks(blog)} className='ml-2'><FaBookmark></FaBookmark></button>
                </div>


            </div>

            <h2 className='text-4xl mt-4'>{title}</h2>
            <p className='mt-3'>{hashtags.map((hash,idx)=><span key={idx}>
                <a href="">#{hash}</a>
            </span>)}</p>

            <button onClick={()=>handleReadingTime(reading_time)} className='mt-4 text-purple-600 font-bold underline'>Mark As Read</button>






        </div>
    );
};














Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks:PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blog;