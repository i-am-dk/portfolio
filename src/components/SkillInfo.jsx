const SkillInfo = ({ currentStage }) => {
    let text = '';
    
    if (currentStage === 1)
      text = 'C#';
    else if (currentStage === 2)
      text = 'Dart';
    else if (currentStage === 3)
      text = 'C++';
    else if (currentStage === 4)
      text = 'javascript';
    else if (currentStage === 5)
      text = 'SQL';
      else if (currentStage === 6)
      text = 'ASP.NET MVC';
      else if (currentStage === 7)
      text = 'ASP.NET WEB API';
      else if (currentStage === 8)
      text = 'Entity Framework';
      else if (currentStage === 9)
      text = 'React';
      else if (currentStage === 10)
      text = 'NUnit/XUnit';
      else if (currentStage === 11)
      text = 'JSON.NET';

    else
      return null;
  
    return (
      <span className='font-semibold text-3xl mx-2 blue-gradient_text'>{text}</span>
    );
  };
  
  export default SkillInfo;
  