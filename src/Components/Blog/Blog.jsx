import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mt-10 mb-20'>
            <img className='w-full rounded-lg' src={cover} alt={`cover picture of ${title}`} />
            <div className='flex justify-between my-8'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={() =>  handleAddToBookmark(blog)}
                    className='ml-2 text-xl'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl my-4'>{title}</h2>
            <p className='flex gap-6'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
            <button 
            onClick={() => handleMarkAsRead(id,reading_time)}
            className='mt-3 text-xl font-semibold text-[#6047EC] underline'>Mark as read</button>
        </div>
    );
};



Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;