import React from "react";
import "./TnC.css";
interface Props {}
const TnC: React.FC<Props> = ({}) => {
  return (
    <div className="tnc">
      <h1> CONDUCT AND BEHAVIOUR</h1>
      <p>
        Management reserves the right to refuse entry, cancel a membership or
        request a member to leave the premises if the member does not behave in
        a responsible manner, is under the influence of drugs and/or alcohol or
        does not adhere to I agree that the information declared above is true
        and correct and I have read and understand that my rights are limited by
        this disclaimer. Member Name: Signature: Date: Guardian/Parent:
        Signature: Date: Staff Member Name: Signature: Date: the general
        conditions of entry. Respect for the privacy and comfort of fellow gym
        members is paramount and expected.{" "}
      </p>
      <h1>EQUIPMENT</h1>
      <p>
        All equipment must be handled appropriately and returned to appropriate
        storage location after each use. Please do not drop the weights. Any
        faults or damage to equipment must be reported to the front desk.
      </p>
      <h1>GYMNASIUM</h1>
      <p>
        <ul>
          <li>
            Please ensure you warm up and stretch before commencing your workout
            and cool down and stretch upon completion of your workout.
          </li>
          <li>
            Members using the gym do so on the understanding that they believe
            that their state of health and physical condition is such that their
            well-being will not be unduly affected when using the equipment and
            apparatus.
          </li>
          <li>
            <span>K&D</span> Fitness encourages members over 35 years to seek
            medical clearance prior to commencing an exercise program at{" "}
            <span>K&D</span> Fitness. Use of the gym equipment and apparatus is
            on the basis that the member has an understanding of the proper use
            of such equipment and uses that equipment at their own risk.
          </li>
          <li>
            It should be noted that the Gym is unattended, so members should
            familiarize themselves fully in the operation of the equipment
            provided and workout within their limitations. Inductions are
            available for new members.
          </li>
        </ul>
      </p>
      <h1>CHARGES</h1>
      <p>
        <span>K&D</span> Fitness reserves the right to increase prices during
        the annual budget process.
      </p>
      <h1>DISCLAIMER</h1>
      <p>
        <ol>
          <li>
            {" "}
            I agree to comply with all rules, conditions and directions
            stipulated in this Terms and Conditions document regarding the
            facility and its equipment use and personal behaviour of members
            whilst using the Gym.
          </li>
          <li>
            To the best of my knowledge, I believe that my state of health and
            physical condition is such that the proper use of the Gym facilities
            is in accordance with the Terms and Conditions which apply, thereto
            will not pose any risk to my health and wellbeing.
          </li>
          <li>
            I acknowledge and agree that my use of the services, facilities,
            equipment, or apparatus of the Gym will be undertaken at my own
            risk.
          </li>
          <li>
            {" "}
            Exercise is demanding and there are innate risks associated with an
            exercise programme and the gym environment. Participating in
            exercise at <span>K&D</span> Fitness may cause serious injury,
            paralysis or death. I participate in exercise at <span>K&D</span>{" "}
            Fitness at my own risk. I release, indemnify, and hold harmless{" "}
            <span>K&D</span> Fitness, its servants and agents, from and against
            all and any actions or claims which may be made by me or my property
            whether by negligence, breach of contract or in any way whatsoever
            or any liability that results from the breach of an express or
            implied warranty that <span>K&D</span> Fitness will be rendered with
            responsible care or skill.
          </li>
          <li>
            In the event that I am injured, or my property is damaged, I will
            bring no claim, legal or otherwise, against <span>K&D</span> Fitness
            in respect of that injury or damage.
          </li>
        </ol>
      </p>
    </div>
  );
};

export default TnC;
