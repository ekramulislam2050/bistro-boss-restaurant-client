 import chefServiceImg from '../../../assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div className='relative mt-10'>
            <img src={chefServiceImg} className='w-full' />
            <div className='absolute max-w-screen-md p-6 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2'>
                <h2 className="mb-4 text-2xl font-bold uppercase">Bistro Boss</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero rem est earum. Culpa, facilis qui. Impedit quos tempora, nisi, fugiat optio sapiente consequuntur illum, maiores laborum non voluptatem suscipit eveniet nam tenetur eligendi sed magni. Accusantium minus dolores, libero provident id illo repellat porro non magni adipisci enim repudiandae sequi mollitia? Eum architecto inventore odio, eaque expedita excepturi repellendus enim molestias culpa aut molestiae deleniti sint commodi itaque !</p>
            </div>
        </div>
    );
};

export default ChefService;