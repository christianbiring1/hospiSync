import PageHead from '../common/pageHead';

const FAQs = () => {
  const handleAdmit = () => console.log('Admit');
  return (
    <>
      <div className="dashboard_container">
        <PageHead
          name="FAQs"
          icon="<--"
          register="register"
          homeLink="Home"
          linkName="faqs"
          onAdmit={handleAdmit}
        />
      </div>
      {/* <Register /> */}
    </>
  );
};

export default FAQs;
