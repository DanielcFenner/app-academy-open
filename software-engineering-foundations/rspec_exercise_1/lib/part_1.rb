def average(num1, num2)
    (num1 + num2) / 2.0
end

def average_array(array)
array.sum / array.length.to_f
end

def repeat(str, num)
str * num
end

def yell(str)
    str.upcase + "!" 
end

def alternating_case(str)
 array = str.split
 array.each_with_index do |ele,i|
    if i % 2 == 0
        ele.upcase!
    else
        ele.downcase!
    end
end
    array.join(" ")
end
