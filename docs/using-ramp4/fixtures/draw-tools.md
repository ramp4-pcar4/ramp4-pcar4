# Draw Fixture Keyboard Accessibility

The Draw fixture lets users create, edit, and manipulate graphics via mouse and keyboard controls. This document outlines the keyboard shortcuts available for users who prefer or require keyboard navigation.

## Basic Controls

| Key        | Function |
|------------|----------|
| `Enter`    | Create a shape at the center of the map, or select a shape under the crosshair |
| `Delete`/`Backspace` | Delete the selected shape |
| `Escape`   | Cancel current drawing operation or deselect current shape |

## Moving, Resizing and Rotating Shapes

When a shape is selected, the following keyboard controls can be used to manipulate it:

### Moving Shapes

Use the arrow keys to move the selected shape in the corresponding direction:

| Key        | Movement |
|------------|----------|
| `↑` (Up Arrow)    | Move shape up |
| `↓` (Down Arrow)  | Move shape down |
| `←` (Left Arrow)  | Move shape left |
| `→` (Right Arrow) | Move shape right |

### Resizing Shapes

Hold `Shift` while pressing arrow keys to resize the selected shape:

| Key Combination | Resize Action |
|-----------------|---------------|
| `Shift` + `↑` (Up Arrow)    | Increase size vertically |
| `Shift` + `↓` (Down Arrow)  | Decrease size vertically |
| `Shift` + `→` (Right Arrow) | Increase size horizontally |
| `Shift` + `←` (Left Arrow)  | Decrease size horizontally |

> Note: Resizing is not supported for point graphics.

### Rotating Shapes

Hold `Alt` while pressing left or right arrow keys to rotate the selected shape:

| Key Combination | Rotation Action |
|-----------------|----------------|
| `Alt` + `←` (Left Arrow)  | Rotate counterclockwise |
| `Alt` + `→` (Right Arrow) | Rotate clockwise |

> Note: Rotation is not supported for point graphics.

## Creating Multi-Point Shapes (Polylines and Polygons)

The Draw fixture supports creating multi-point shapes (polylines and polygons) using keyboard controls:

1. Activate polyline or polygon drawing mode
2. Press `Enter` to start multi-point mode and place the first point at the center of the map
3. Use arrow keys to position the crosshair for the next point
4. Press `Enter` to add additional points
5. To remove the last point added, press `Backspace` or `Delete`
6. Press `Escape` to complete the shape (requires at least 2 points for polylines, 3 for polygons)

## Accessibility Announcements

The Draw fixture includes screen reader announcements for all actions, providing feedback when:
- A shape is created
- A shape is selected/deselected
- A shape is moved, resized, or rotated
- A point is added or removed in multi-point mode
- A drawing operation is completed or canceled

These announcements help users with screen readers understand the current state and results of their actions.