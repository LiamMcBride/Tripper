class Chat():
    def __init__(self, name, chatId=-1, communityId=-1):
        self.name = name
        self.id = chatId
        self.messages = []
        self.communityId = communityId
        
    def __str__(self):
        return f"[{self.name}, {self.id}, {self.communityId}]"