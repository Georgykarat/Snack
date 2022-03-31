import tkinter
import math
 
# All angles to 360-scale
def circleangle(angle):
    while (angle < 0):
        angle += 360
    while (angle >= 360):
        angle -= 360
    return angle

# Get brunch end point for evry brunch
def getbranchend(x, y, angle, length):
    return (
        x - (math.sin(math.radians(angle)) * length),
        y - (math.cos(math.radians(angle)) * length))

def branch(point, angle, length):
    # When recursion ends
    if (length < minLength):
        return
    
    # Calculate new angles for new branches
    lb_angle = circleangle(angle + angleBetween)
    rb_angle = circleangle(angle - angleBetween)
 
    x, y = point[0], point[1]
    # Get final points for branches with our formula
    lb_point = getbranchend(x, y, lb_angle, length)
    rb_point = getbranchend(x, y, rb_angle, length)
 
    # Edit branch width
    branch_width = 10 * ((length - minLength) / (startLength - minLength))
    c.create_line(x, y, lb_point[0], lb_point[1], width = branch_width, fill='green')
    c.create_line(x, y, rb_point[0], rb_point[1], width = branch_width, fill='green')
    
    # RECURSION to create new branches
    branch(lb_point, lb_angle, length * nextLen)
    branch(rb_point, rb_angle, length * nextLen)

# Create window and canvas
root = tkinter.Tk()
root.title('Recursion tree')
width, height = 1200, 500
c = tkinter.Canvas(root, width = width, height = height, bg='white')
c.pack()

# Parameters
startLength = 90
minLength = 5 
angleBetween = 20
nextLen = 0.8

# Tree trunk
if (__name__ == '__main__'):
    root_x = width / 2
    root_y = height * 0.99
    x = root_x
    y = root_y - startLength
    c.create_line(root_x, root_y, x, y, fill='black', width = 12)

branch((x, y), 0, startLength * nextLen)
root.mainloop()