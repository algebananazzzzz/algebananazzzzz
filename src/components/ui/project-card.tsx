import * as React from "react";
import ActionButton from "./action-button";
import Svg from "./svg";
import type { ProjectItem } from "@/types/projects";

interface ProjectCardProps {
    project: ProjectItem;
    setPopup?: (video: string) => void;
}


const ProjectCard: React.FC<ProjectCardProps> = ({ project, setPopup }) => {
    const renderActions = () =>
        project.actions?.map((action, index) => (
            <ActionButton
                key={index}
                text={action.text}
                action={action.video ? () => { if (action.video) setPopup?.(action.video); } : undefined}
                asset={action.asset}
                link={action.link}
                color={action.color}
            />
        ));

    return (
        <div className={`group flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-md px-4 md:px-5 dark:shadow-slate-700/[.7] transition-all duration-250 ${project.additional_description && "hover:border-gray-300 dark:hover:bg-gray-600 dark:hover:border-gray-500"}`}>
            <div className={`child block py-4 md:py-5 ${project.additional_description && "group-hover:hidden"}`}>
                {project.date && (
                    <p className="text-sm font-medium text-fuchsia-500 dark:text-fuchsia-500">{project.date}</p>
                )}
                <p className="mt-1 font-bold text-lg md:text-xl text-gray-800 dark:text-gray-200">{project.name}</p>
                <p className="mt-2 text-base text-gray-700 dark:text-gray-400">{project.description}</p>

                {!project.additional_description && project.actions && (
                    <div className="mt-2 flex gap-x-2">
                        {renderActions()}
                    </div>
                )}

                {project.svgIcons && (
                    <div className="mt-2 flex items-center gap-x-1">
                        {project.svgIcons.map((svgName, index) => (
                            <div
                                key={index}
                                className="inline-flex justify-center items-center h-[2rem] w-[2rem] md:h-[2.375rem] md:w-[2.375rem] text-center text-gray-600 dark:text-gray-400"
                            >
                                <Svg name={svgName} className="w-4 md:w-5" />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {project.additional_description && <div className="child hidden group-hover:block py-3 md:py-4">
                <p className="text-gray-800 dark:text-gray-300 text-justify">
                    {project.additional_description}
                </p>
                {project.actions && <div className="mt-2 flex gap-x-2">
                    {renderActions()}
                </div>}
            </div>}
        </div>
    );
};

export default ProjectCard