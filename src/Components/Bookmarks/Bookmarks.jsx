import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <>
            <div className="md:w-1/3 ml-6 mt-20">
                <div className='bg-[#6047EC1A] py-6 rounded-lg h-fit'>
                    <h3 className="text-3xl text-center text-[#6047EC]">Spent time on read : {readingTime} min</h3>
                </div>
                <div className='bg-gray-300 mt-5 py-4 rounded-lg h-fit'>
                    <h2 className="text-4xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
                    {
                        bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>
        </>
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;