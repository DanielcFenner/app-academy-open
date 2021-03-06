class Room
    def initialize(num)
        @capacity = num
        @occupants = []
    end

    def capacity
        @capacity
    end

    def occupants
        @occupants
    end

    def full?
        if @occupants.length == capacity
            return true
        else
            return false
        end
    end

    def available_space
        @capacity - @occupants.length
    end

    def add_occupant(str)
        if !full?
            @occupants << str
            return true
        else
            return false
        end
    end
  
end