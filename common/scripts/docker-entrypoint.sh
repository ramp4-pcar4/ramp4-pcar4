#!/bin/bash

# Some projects have dist dependencies but don't publish builds. 
# For now we build when the container starts, dist folders will appear shortly after startup.
cd /home/node/r4mp
rush build

# Keep container running by replacing current shell with bash interactive
exec bash
