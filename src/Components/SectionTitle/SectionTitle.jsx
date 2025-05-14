 

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="py-4 mx-auto text-center md:w-3/12">
            <p className="text-yellow-500 capitalize">{subHeading}</p>
            <h2 className="py-2 text-3xl uppercase border-y-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;