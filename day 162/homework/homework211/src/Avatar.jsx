import React from 'react';

function Avatar({ imgUrl }) {
  return (
    <img 
      src="https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-1/714989930_122299362536219405_7186935063773061865_n.jpg?stp=c474.571.588.588a_dst-jpg_tt6&cstp=mx588x588&ctp=s200x200&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=GOZl72aeNU0Q7kNvwFDJgtA&_nc_oc=AdqvhJOVQS8-Phg1hFHIb-UFbCrPFlsJhJr4RFVYfxY4nilVVY9HFBDD4rVlNIsMXzU&_nc_zt=24&_nc_ht=scontent.ftbs10-1.fna&_nc_gid=1MSV2DRItFldmhRiG9jKUg&_nc_ss=7b2a8&oh=00_AQLhHszwcDAcIrA-Jv-mzfB1OMMqyRH9i_EPFpmudj-KPg&oe=6AA40CA8"
      alt="User Avatar" 
      style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
    />
  );
}

export default Avatar;
