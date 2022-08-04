

def brGame1():
        while True:
            try:
                p=int(input("부를 숫자의 개수를 입력하세요(1,2,3만 입력 가능): "))
            except ValueError:
                print("정수를 입력하세요: ")
            else:
                while True:
                    if p in range(1,4):
                        break
                    else:
                        p=int(input("1,2,3 중 하나를 선택하세요:" ))
                return p

def brGame2(player,num):
    while True:
        turn = brGame1()
        if player == "playerA":
            for i in range(turn):
                num += 1
                print(player, ':', num)
            continue
        elif player == "playerB":
            for i in range(turn):
                num += 1
                print(player, ":", num)
            continue



num = 0
playerList = ["playerA", "playerB"]
for player in playerList:
    brGame2(player,num)
    if num >= 31:
        break

# while True:
#     turn1 = brGame()
#     for i in range(turn1):
#         num += 1
#         print("player A :", num)
#         if num == 31:
#             print("playerB win!")
#             break
#     turn2 = brGame()
#     for j in range(turn2):
#         num+=1
#         print("player B :", num)
#         if num == 31:
#             print("playerA win!")
#             break
    
#     if num >= 31:
#         break