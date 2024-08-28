import React, { useState } from "react";
import {
  Button,
  Dialog,
  Progress,
  Typography,
  DialogBody,
  IconButton,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
export default function SkillModal({ children, technology }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const {
    name,
    icon,
    description,
    docs,
    foundation,
    intermediate,
    advance,
    popularity,
    activeUsers,
  } = technology;

  const handleWebDocs = () => {
    window.open(docs, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Button onClick={handleOpen} variant="contained" color="primary">
        {children}
      </Button>
      <Dialog
        open={open}
        onClose={handleOpen}
        className="bg-gray-900 text-white"
      >
        <DialogHeader className="relative m-0 block">
          <img className="w-10 h-10" src={icon} />
          <Typography variant="h4" color="white">
            {name}
          </Typography>
          <Typography className="mt-1 font-normal text-gray-400">
            {description}
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <XMarkIcon
              style={{ color: "white" }}
              className="h-7 w-7 stroke-2"
            />
          </IconButton>
        </DialogHeader>
        <DialogBody className="bg-gray-800">
          <Typography className="text-white font-semibold" variant="h6">
            My Expertise
          </Typography>
          <div className="w-full">
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography
                className="text-gray-400 font-semibold"
                variant="body2"
              >
                Foundation
              </Typography>
              <Typography className="text-white font-semibold" variant="body2">
                {foundation}%
              </Typography>
            </div>
            <Progress color="green" value={foundation} />
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography
                className="text-gray-400 font-semibold"
                variant="body2"
              >
                Intermediate Topics
              </Typography>
              <Typography className="text-white font-semibold" variant="body2">
                {intermediate}%
              </Typography>
            </div>
            <Progress color="green" value={intermediate} />
            <div className="mb-2 flex items-center justify-between gap-4">
              <Typography
                className="text-gray-400 font-semibold"
                variant="body2"
              >
                Advance Topics
              </Typography>
              <Typography className="text-white font-semibold" variant="body2">
                {advance}%
              </Typography>
            </div>
            <Progress color="green" value={advance} />
          </div>
          <div className="mt-6 flex gap-16">
            <div>
              <Typography className="text-gray-400 font-semibold">
                Skill Market Popularity
              </Typography>
              <Typography className="text-white font-semibold" variant="body2">
                {popularity}%
              </Typography>
              <Progress
                color="blue"
                className="bg-gray-600"
                value={popularity}
              />
            </div>
            <div>
              <Typography className="text-gray-400">
                Number of Active Users
              </Typography>
              <Typography className="text-white font-semibold" variant="body2">
                {activeUsers}
              </Typography>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="flex flex-wrap justify-between gap-4 p-4 bg-gray-800">
          <Typography className="text-gray-400 flex gap-2 items-center">
            <InformationCircleIcon className="h-5 w-5 text-gray-400" />
            The sources are from Stack Overflow survey.
          </Typography>
          <Button onClick={handleWebDocs} variant="contained" color="primary">
            Know More
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
