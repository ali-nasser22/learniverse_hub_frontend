import { CheckCheck } from "lucide-react";
import { ICourse } from "../../../../../../model/course-model";

interface CourseOverViewProps {
  course: ICourse;
}

const CourseOverView = ({ course }: CourseOverViewProps) => {
  return (
    <>
      <h3 className="text-2xl">Course Description</h3>
      <p className="mt-4">{course.description}</p>
      <div className="bg-gray-50 space-y-6 p-8 rounded-md mt-8">
        <h4 className="text-2xl">What You will Learn?</h4>
        {course.learning && course.learning.length > 0 ? (
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-6">
            {course.learning.map((learning, index) => (
              <li key={`learning-${index}`} className="flex space-x-3">
                <div className="flex-none relative top-1">
                  <CheckCheck />
                </div>
                <div className="flex-1">{learning}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No modules available for this course.</p>
        )}
      </div>
    </>
  );
};

export default CourseOverView;
