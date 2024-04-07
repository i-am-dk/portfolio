const HomeInfo = ({ currentStage }) => {
  let text = '';
  
  if (currentStage === 1)
    text = 'A DotNet Developer';
  else if (currentStage === 2)
    text = 'A Web Developer';
  else if (currentStage === 3)
    text = 'An Artist';
  else if (currentStage === 4)
    text = 'A Cyclist';
  else if (currentStage === 5)
    text = 'A Minimalist';
  else
    return null;

  return (
    <span className='font-semibold mx-2 blue-gradient_text'>{text}</span>
  );
};

export default HomeInfo;
