// Fortunie Siamsi — "game" edge function (generated; edit sources in ftn/)
import { createClient } from "npm:@supabase/supabase-js@2.45.4";
const F=[
["ดีมาก","ฟ้าเปิด ทางโล่ง","ช่วงนี้ทำอะไรมีคนช่วยหนุน เรื่องที่รอมานานเริ่มขยับ","คนโสดมีโอกาสเจอคนคุยถูกใจจากวงเพื่อน คนมีคู่ได้คุยเรื่องอนาคตกัน","งานที่ตั้งใจทำมีคนเห็น เหมาะกับการเสนอไอเดียใหม่","มีรายรับเข้ามาเป็นระยะ เก็บส่วนหนึ่งไว้ก่อนใช้","กล้าพูดสิ่งที่อยากได้ออกไปตรง ๆ"],
["ดี","ลมพัดเบา เรือค่อยแล่น","ไม่หวือหวาแต่มั่นคง ทำต่อเนื่องแล้วจะเห็นผล","ความสัมพันธ์อบอุ่นขึ้นจากเรื่องเล็ก ๆ ที่ใส่ใจกัน","งานเดินตามแผน อย่าเพิ่งเปลี่ยนกลางทาง","ใช้จ่ายตามแผนได้ดี ยังไม่ใช่ช่วงลงทุนก้อนใหญ่","ทำทีละอย่างให้จบก่อนเริ่มเรื่องใหม่"],
["ค่อยเป็นค่อยไป","ฝนตกก่อนฟ้าใส","มีเรื่องให้คิดเยอะ เป็นช่วงจัดระเบียบก่อนเรื่องดีจะตามมา","ถ้ามีเรื่องค้างใจ ช่วงนี้เหมาะกับการคุยกันดี ๆ","งานอาจช้ากว่าที่หวัง เผื่อเวลาไว้อีกหน่อย","ชะลอการซื้อของชิ้นใหญ่ไว้ก่อน","พักให้พอ แล้วค่อยตัดสินใจ"],
["ดีมาก","ดอกบัวพ้นน้ำ","สิ่งที่อดทนมาเริ่มออกดอกออกผล","มีคนเห็นความตั้งใจของคุณ ความรักค่อย ๆ ชัดขึ้น","เหมาะกับการเรียนรู้หรือเริ่มฝึกทักษะใหม่","มีโอกาสได้ผลตอบแทนจากสิ่งที่ทำไว้ก่อนหน้า","ขอบคุณตัวเองที่ไม่ยอมแพ้"],
["ดี","บ้านมีแสงไฟ","คนใกล้ตัวคือกำลังใจสำคัญของช่วงนี้","คนใกล้ตัวอาจเป็นคนที่ใช่มากกว่าที่คิด","ทำงานเป็นทีมได้ผลดีกว่าทำคนเดียว","เหมาะกับการวางแผนเงินร่วมกับครอบครัว","โทรหาคนที่คิดถึงสักคน"],
["ค่อยเป็นค่อยไป","ทางคดเคี้ยว ค่อยไปก็ถึง","มีทางอ้อมบ้าง แต่ทุกก้าวพาเข้าใกล้เป้าหมาย","อย่าเร่งคำตอบจากใคร ให้เวลาความรู้สึกได้ชัดเอง","รายละเอียดเล็ก ๆ สำคัญ ตรวจงานซ้ำอีกรอบ","จดรายจ่ายสักสัปดาห์ จะเห็นรูรั่วชัดขึ้น","ใจเย็นกับตัวเองให้มากขึ้น"],
["ดีมาก","ดาวนำทาง","ช่วงนี้ความรู้สึกข้างในชัด ลองฟังเสียงในใจ","มีจังหวะดีให้เปิดใจหรือบอกความรู้สึก","มีโอกาสใหม่เข้ามา ลองพิจารณาก่อนปฏิเสธ","มีช่องทางรายได้เสริมให้ลองศึกษา","จดไอเดียที่แวบเข้ามาไว้ทันที"],
["ดี","ต้นไม้ผลิใบ","เป็นช่วงเริ่มต้นที่ดีของหลายเรื่อง","คนโสดลองเปิดรับคนใหม่ คนมีคู่ลองทำกิจกรรมใหม่ด้วยกัน","เหมาะกับการเริ่มโปรเจกต์เล็ก ๆ","ออมทีละน้อย ดีกว่ารอเก็บก้อนใหญ่","เริ่มจากก้าวที่เล็กที่สุดวันนี้"],
["ค่อยเป็นค่อยไป","หมอกยามเช้า","บางเรื่องยังไม่ชัด อย่าเพิ่งรีบสรุป","ถ้าสงสัยอะไร ถามตรง ๆ ดีกว่าเดาเอง","รอข้อมูลให้ครบก่อนตัดสินใจเรื่องสำคัญ","อ่านเงื่อนไขให้ละเอียดก่อนเซ็นหรือโอน","ให้เวลาสักพัก แล้วภาพจะชัดขึ้นเอง"],
["ดีมาก","ทองต้องแสง","เสน่ห์และความสามารถของคุณเด่นชัด","มีคนแอบชื่นชมอยู่ ลองสังเกตคนรอบตัว","ผลงานได้รับคำชม เหมาะกับการขอสิ่งที่สมควรได้","รายได้จากงานที่ทำมีแนวโน้มดีขึ้น","แต่งตัวให้รู้สึกดีกับตัวเอง"],
["ดี","สายน้ำไหลเย็น","อารมณ์นิ่งขึ้น ตัดสินใจได้ดี","คุยกันด้วยความใจเย็น ความเข้าใจจะตามมา","งานที่ต้องใช้สมาธิทำได้ดีเป็นพิเศษ","รายรับรายจ่ายสมดุล","หาเวลาเงียบ ๆ ให้ตัวเองวันละนิด"],
["ค่อยเป็นค่อยไป","เมฆบังจันทร์","ถ้ารู้สึกเหนื่อย เป็นสัญญาณให้พัก ไม่ใช่ให้หยุด","ความรักต้องการความอดทนอีกนิด อย่าตัดสินจากวันที่เหนื่อย","แบ่งงานใหญ่เป็นชิ้นเล็ก จะเบาขึ้นมาก","งดใช้เงินเพื่อคลายเครียดชั่วคราว","นอนให้พอก่อนเรื่องอื่น"],
["ดีมาก","มังกรเหินฟ้า","พลังสูง ทำอะไรมีแรงผลักดัน","ความมั่นใจทำให้คุณน่าดึงดูด","เหมาะกับการรับผิดชอบงานที่ใหญ่ขึ้น","มีโอกาสทางการเงินจากความกล้าตัดสินใจ แต่คิดให้รอบก่อน","ตั้งเป้าให้ชัด แล้วลงมือ"],
["ดี","เพื่อนแท้ข้างกาย","มีคนพร้อมช่วยเหลือ อย่าเกรงใจที่จะขอ","ความรักที่เริ่มจากมิตรภาพมีแนวโน้มดี","คนรู้จักพาไปเจอโอกาสใหม่","ให้ยืมเงินควรมีข้อตกลงที่ชัดเจน","ขอความช่วยเหลือในเรื่องที่ติดอยู่"],
["ค่อยเป็นค่อยไป","ปลูกวันนี้ เก็บเกี่ยวพรุ่งนี้","ผลยังไม่มาทันที แต่สิ่งที่ทำอยู่มีความหมาย","สร้างความไว้ใจทีละนิด ดีกว่าเร่งความสัมพันธ์","ตั้งใจฝึกฝน ช่วงนี้คือช่วงสะสม","อดทนกับแผนออมระยะยาว","มองย้อนดูว่าคุณมาไกลแค่ไหนแล้ว"],
["ดี","ประตูบานใหม่","มีการเปลี่ยนแปลงเล็ก ๆ ที่พาไปทางที่ดีขึ้น","ถ้ากำลังมูฟออน ช่วงนี้ใจเบาลง","ลองวิธีทำงานแบบใหม่ จะง่ายกว่าเดิม","ทบทวนค่าบริการรายเดือนที่ไม่ได้ใช้","ปล่อยของเก่าที่ไม่ใช้แล้ว เปิดที่ให้ของใหม่"],
["ดีมาก","ฟ้าหลังฝน","เรื่องหนักใจเริ่มคลี่คลาย รอยยิ้มกลับมา","ความเข้าใจผิดเก่า ๆ มีโอกาสได้เคลียร์","ปัญหาที่ค้างอยู่เริ่มเห็นทางออก","สภาพคล่องดีขึ้นกว่าช่วงก่อน","ให้รางวัลเล็ก ๆ กับตัวเอง"],
["ค่อยเป็นค่อยไป","ถือหางเสือให้มั่น","มีหลายทางให้เลือก ยึดสิ่งที่สำคัญที่สุดไว้","ถ้าน้อยใจ พูดออกมาอย่างนุ่มนวล ดีกว่าเก็บไว้คนเดียว","โฟกัสงานหลัก ปฏิเสธงานที่ไม่จำเป็นได้","เลี่ยงตัดสินใจเรื่องเงินตอนอารมณ์ยังไม่นิ่ง","เขียนเรื่องสำคัญ 3 อย่างของสัปดาห์นี้"],
["ดี","ระฆังดังกังวาน","คำตอบที่รออยู่มีแนวโน้มมาถึง","มีคนส่งสัญญาณมา ลองตอบกลับดู","การติดต่อประสานงานลื่นไหล","เหมาะกับการตามเงินที่ค้างอยู่","ตอบข้อความที่ค้างไว้ให้ครบ"],
["ดีมาก","ทรัพย์ไหลมา","เรื่องเงินและโอกาสช่วงนี้ค่อนข้างสดใส","ความรักเรียบง่ายแต่มั่นคง","งานที่ทำมีแนวโน้มต่อยอดเป็นรายได้","มีแนวโน้มได้รายรับเพิ่ม วางแผนใช้ให้คุ้ม","แบ่งส่วนหนึ่งทำบุญหรือแบ่งปัน"],
["ค่อยเป็นค่อยไป","เทียนกลางลม","ใจอาจหวั่นไหวง่าย ดูแลใจตัวเองก่อนใคร","รักตัวเองให้มาก ความรักที่ใช่จะเข้ามาง่ายขึ้น","ไม่ต้องเปรียบเทียบกับใคร เดินตามจังหวะตัวเอง","แยกของจำเป็นกับของอยากได้ก่อนจ่าย","อยู่กับคนที่ทำให้สบายใจ"],
["ดี","นกคืนรัง","กลับมาหาสิ่งที่ทำให้ใจสงบ","มีโอกาสได้ใช้เวลาดี ๆ กับคนที่รัก","งานที่เคยพักไว้ หยิบกลับมาทำต่อได้","ค่อย ๆ เคลียร์ภาระเก่าทีละก้อน","กลับไปทำสิ่งที่เคยชอบ"],
["ดีมาก","พระจันทร์เต็มดวง","หลายเรื่องลงตัวพอดี","ความสัมพันธ์ชัดเจนขึ้น คนโสดมีเสน่ห์เป็นพิเศษ","งานใหญ่ที่ทำมามีแนวโน้มเสร็จสวย","เหมาะกับการสรุปบัญชีและตั้งเป้าใหม่","ฉลองความสำเร็จเล็ก ๆ ที่ผ่านมา"],
["ค่อยเป็นค่อยไป","รากไม้หยั่งลึก","เน้นสร้างพื้นฐานให้แน่น มากกว่าความเร็ว","ความรักที่ค่อย ๆ โตมักอยู่ได้นาน","เรียนรู้จากคนที่มีประสบการณ์","เน้นความมั่นคงไว้ก่อน ยังไม่ใช่ช่วงเสี่ยง","ทำกิจวัตรเล็ก ๆ ให้สม่ำเสมอ"],
["ดี","ผีเสื้อแรกบิน","กล้าลองสิ่งใหม่ จะได้เจอด้านดีของตัวเอง","การเริ่มต้นใหม่ในความรักเป็นไปได้","เหมาะกับการเสนองานหรือสมัครงาน","ลองหารายได้จากสิ่งที่ถนัด","ทำสิ่งที่กลัวนิด ๆ สักหนึ่งอย่าง"],
["ดี","สะพานเชื่อมใจ","เรื่องที่ห่างเหินมีโอกาสกลับมาใกล้กัน","คนที่ห่างกันไปอาจติดต่อกลับมา คิดให้ดีก่อนตอบ","เป็นตัวกลางประสานงานได้ดี","ร่วมมือกับคนอื่นช่วยลดค่าใช้จ่ายได้","ให้อภัยตัวเองในเรื่องที่ผ่านไปแล้ว"],
["ดีมาก","ม้าวิ่งทางตรง","เป้าหมายชัด ทางข้างหน้าโล่ง","รู้ใจตัวเองชัดขึ้นว่าต้องการความรักแบบไหน","มีแนวโน้มก้าวหน้าเร็วกว่าที่คิด","เรื่องเงินที่วางแผนมาดี มีแนวโน้มออกมาดี","เดินหน้าสิ่งที่ตัดสินใจไว้แล้ว"],
["ค่อยเป็นค่อยไป","ชาร้อนในวันหนาว","อ่อนโยนกับตัวเองหน่อย สิ่งดี ๆ อยู่ใกล้กว่าที่คิด","ความห่วงใยเล็ก ๆ มีความหมายกว่าคำสัญญาใหญ่","ทำงานในจังหวะที่ไหว ไม่ต้องรีบตามใคร","ใช้เงินกับสิ่งที่ช่วยให้ใจสบายอย่างพอดี","ดื่มอะไรอุ่น ๆ แล้วหายใจลึก ๆ"],
["ดีมาก","ลมส่งว่าว","มีคนช่วยผลักให้ไปได้ไกลกว่าเดิม","ความรักได้แรงหนุนจากคนรอบตัว","มีผู้ใหญ่เห็นฝีมือ เปิดทางให้","มีรายได้จากคำแนะนำของคนรู้จัก","รับความช่วยเหลือด้วยใจเปิด"],
["ดี","ร่มใหญ่กลางแดด","มีที่พักใจให้กลับไปเสมอ","คู่รักเป็นที่พึ่งให้กันได้ดี","งานมั่นคง เหมาะกับการทำให้ดีขึ้นทีละนิด","ค่าใช้จ่ายอยู่ในการควบคุม","ขอบคุณคนที่คอยดูแลคุณ"],
["ค่อยเป็นค่อยไป","เดินช้าแต่ไม่หยุด","ความคืบหน้าเล็ก ๆ ก็นับว่าเดินหน้า","ไม่ต้องรีบหาคำตอบเรื่องหัวใจ","ทำงานตามลำดับ อย่าข้ามขั้น","ตั้งออมอัตโนมัติจะง่ายกว่า","ชื่นชมตัวเองทุกครั้งที่ทำได้"],
["ดีมาก","ดอกไม้บานรับเช้า","เป็นช่วงที่สดใส มีพลังเริ่มสิ่งใหม่","มีโอกาสได้เจอคนที่คุยแล้วสบายใจ","ไอเดียสดใหม่ได้รับการตอบรับ","มีแนวโน้มได้ของขวัญหรือโชคเล็ก ๆ","ตื่นเช้าขึ้นอีกนิดแล้วเริ่มวันใหม่"],
["ดี","นาฬิกาเดินตรง","จังหวะชีวิตลงตัวขึ้น","นัดเจอกันบ่อยขึ้นช่วยให้ใกล้กัน","งานที่มีกำหนดส่งทำได้ทันเวลา","จ่ายบิลตรงเวลา ช่วยให้ใจสบาย","จัดตารางวันให้มีช่วงพัก"],
["ค่อยเป็นค่อยไป","ทะเลก่อนน้ำขึ้น","ช่วงนี้เงียบไปบ้าง เป็นช่วงรอจังหวะ","อย่าคิดแทนอีกฝ่าย ถามให้ชัด","รอจังหวะที่เหมาะก่อนเสนองานใหญ่","เก็บสำรองไว้สำหรับเรื่องไม่คาดคิด","ใช้ช่วงเงียบนี้เติมพลังให้ตัวเอง"],
["ดีมาก","สายรุ้งพาดฟ้า","มีเรื่องน่ายินดีเข้ามาหลังรอคอย","ความรักมีสีสัน มีเรื่องให้ยิ้มบ่อย","ได้ร่วมงานกับคนเก่งที่ช่วยให้โต","มีแนวโน้มได้เงินก้อนเล็ก ๆ จากงานพิเศษ","แบ่งปันเรื่องดีให้คนที่รัก"],
["ดี","ใบไม้ร่วงเพื่อผลิใหม่","ปล่อยบางอย่างไป เพื่อรับสิ่งที่ดีกว่า","ความสัมพันธ์ที่ไม่สบายใจ ค่อย ๆ ถอยออกมาได้","ปรับบทบาทงานให้เหมาะกับตัวเองมากขึ้น","ตัดรายจ่ายที่ไม่จำเป็นแล้วจะเบาขึ้น","จัดห้องหรือโต๊ะทำงานใหม่"],
["ค่อยเป็นค่อยไป","เส้นด้ายต้องค่อยกรอ","เรื่องที่ยุ่งเหยิงต้องค่อย ๆ แก้ทีละปม","พูดคุยทีละเรื่อง จะเข้าใจกันง่ายกว่า","จัดลำดับงานก่อนลงมือ","รวมรายจ่ายย่อยให้เห็นในภาพเดียว","เขียนสิ่งที่กังวลออกมาบนกระดาษ"],
["ดี","ปลาว่ายทวนน้ำ","มีแรงสู้มากกว่าที่คิด","ความจริงใจทำให้ความรักแน่นแฟ้น","งานยากจะผ่านไปได้ด้วยความตั้งใจ","รายได้ค่อย ๆ ขยับขึ้นตามความพยายาม","เชื่อในแรงของตัวเอง"],
["ดีมาก","ไข่มุกในเปลือกหอย","สิ่งดีที่ซ่อนอยู่ในตัวคุณกำลังถูกมองเห็น","มีคนเห็นคุณค่าในแบบที่คุณเป็น","ทักษะที่สะสมไว้ได้ใช้ประโยชน์","สิ่งที่ลงแรงไว้เริ่มมีค่าขึ้น","อย่ามองข้ามความสามารถของตัวเอง"],
["ค่อยเป็นค่อยไป","ฟ้าครึ้มยามบ่าย","อารมณ์อาจขึ้นลงบ้าง เป็นเรื่องปกติ","ให้พื้นที่กันและกันบ้าง","ทำงานชิ้นที่ง่ายก่อนเพื่อสร้างแรง","เลี่ยงการช้อปตอนเหนื่อย","ออกไปเดินรับลมสักสิบนาที"],
["ดี","บันไดทีละขั้น","ค่อย ๆ ขึ้นไปทีละขั้นอย่างมั่นคง","ความรักเติบโตไปพร้อมกัน","มีโอกาสได้งานที่ท้าทายขึ้น","วางเป้าออมเป็นขั้น ๆ จะทำได้จริง","ตั้งเป้าเล็กที่ทำได้ภายในสัปดาห์นี้"],
["ดีมาก","ประทีปส่องทาง","คำตอบที่ตามหาเริ่มชัดเจน","ใจรู้แล้วว่าใครสำคัญ","มองเห็นทางไปต่อของงานชัดขึ้น","การตัดสินใจเรื่องเงินมีข้อมูลรองรับดี","เชื่อความรู้สึกแรกของตัวเอง"],
["ดี","เมล็ดพันธุ์ในมือ","คุณมีสิ่งที่ต้องการอยู่แล้ว แค่เริ่มลงมือ","ความรักเริ่มจากการกล้าทักทาย","เริ่มงานที่ผัดไว้ได้แล้ว","รายได้เสริมจากงานอดิเรกเป็นไปได้","ลงมือวันนี้ แม้แค่ห้านาที"],
["ค่อยเป็นค่อยไป","จันทร์เสี้ยวรอเต็มดวง","ยังไม่ถึงเวลาเต็มที่ แต่กำลังเดินไปถึง","ความรู้สึกต้องการเวลาเติบโต","สะสมผลงานไว้ วันหนึ่งจะมีคนเห็น","ออมสม่ำเสมอ ดีกว่าออมทีละมาก","อดทนอีกนิด แล้วชื่นชมตัวเองที่มาถึงตรงนี้"]
];
const LV={"ดีมาก":{c:"#a86fe0",bg:"#f1e7fc",glow:"#b98ae6",say:"ใบดีมาก ฟ้าเปิดทางให้แล้วค่ะ"},"ดี":{c:"#6fbf87",bg:"#e8f6ec",glow:"#6fbf87",say:"ใบดีค่ะ วันนี้ใจฟูแน่ ๆ"},"ค่อยเป็นค่อยไป":{c:"#8fa9c4",bg:"#e9f0f7",glow:"#7e9cc0",say:"ค่อย ๆ ไปนะคะ ทุกก้าวมีความหมาย"}};
const RAR=[
 {name:"ธรรมดา",share:50,c:"#8fa9c4",bg:"#e9f0f7",glow:"#9db4c8"},
 {name:"หายาก",share:28,c:"#6fbf87",bg:"#e8f6ec",glow:"#7cbf8e"},
 {name:"แรร์",share:14,c:"#a86fe0",bg:"#f1e7fc",glow:"#b98ae6"},
 {name:"เอพิก",share:6,c:"#e7799f",bg:"#fde8f0",glow:"#f4a9c4"},
 {name:"ตำนาน",share:2,c:"#d9a531",bg:"#fdf3d6",glow:"#f0d28a"}
];
const PETS=[
 {n:"หอยทากใจเย็น",e:"🐌",t:0,ab:{cdr:.05},d:"เวลารอเขย่าฟรีลดลง 5%"},
 {n:"เต่าน้อยมั่นคง",e:"🐢",t:0,ab:{cdr:.05},d:"เวลารอเขย่าฟรีลดลง 5%"},
 {n:"ลูกเจี๊ยบตัวจิ๋ว",e:"🐥",t:0,ab:{star:1},d:"ได้ 1 ดาวทุกครั้งที่เขย่า"},
 {n:"แฮมสเตอร์แก้มป่อง",e:"🐹",t:0,ab:{star:1},d:"ได้ 1 ดาวทุกครั้งที่เขย่า"},
 {n:"กบน้อยนำโชค",e:"🐸",t:0,ab:{again:.05},d:"5% ที่เขย่าแล้วได้เขย่าฟรีอีกครั้ง"},
 {n:"ผึ้งขยัน",e:"🐝",t:0,ab:{cdr:.05},d:"เวลารอเขย่าฟรีลดลง 5%"},
 {n:"เต่าทองจุดดาว",e:"🐞",t:0,ab:{drop:.25},d:"โอกาสเจอเพื่อนตัวน้อย +0.25%"},
 {n:"เม่นขนนุ่ม",e:"🦔",t:0,ab:{cdr:.05},d:"เวลารอเขย่าฟรีลดลง 5%"},
 {n:"กระรอกเก็บโชค",e:"🐿️",t:0,ab:{star:1},d:"ได้ 1 ดาวทุกครั้งที่เขย่า"},
 {n:"เพนกวินเดินเตาะแตะ",e:"🐧",t:0,ab:{again:.05},d:"5% ที่เขย่าแล้วได้เขย่าฟรีอีกครั้ง"},
 {n:"หนอนน้อยรอบิน",e:"🐛",t:0,ab:{cdr:.05},d:"เวลารอเขย่าฟรีลดลง 5%"},
 {n:"กระต่ายจันทร์",e:"🐰",t:1,ab:{cdr:.10},d:"เวลารอเขย่าฟรีลดลง 10%"},
 {n:"แพนด้าฟูฟู",e:"🐼",t:1,ab:{drop:.5},d:"โอกาสเจอเพื่อนตัวน้อย +0.5%"},
 {n:"แมวนำโชค",e:"🐱",t:1,ab:{again:.10},d:"10% ที่เขย่าแล้วได้เขย่าฟรีอีกครั้ง"},
 {n:"หมาน้อยซื่อสัตย์",e:"🐶",t:1,ab:{cdr:.10},d:"เวลารอเขย่าฟรีลดลง 10%"},
 {n:"โคอาล่าขี้เซา",e:"🐨",t:1,ab:{star:2},d:"ได้ 2 ดาวทุกครั้งที่เขย่า"},
 {n:"หมูนำทรัพย์",e:"🐷",t:1,ab:{again:.10},d:"10% ที่เขย่าแล้วได้เขย่าฟรีอีกครั้ง"},
 {n:"หมีน้ำผึ้ง",e:"🐻",t:1,ab:{drop:.5},d:"โอกาสเจอเพื่อนตัวน้อย +0.5%"},
 {n:"เป็ดน้อยลอยน้ำ",e:"🦆",t:1,ab:{cdr:.10},d:"เวลารอเขย่าฟรีลดลง 10%"},
 {n:"แกะขนเมฆ",e:"🐑",t:1,ab:{burnFree:.25},d:"เผาใบแล้ว 25% ได้เขย่าฟรีทันที"},
 {n:"จิ้งจอกไพ่ทาโรต์",e:"🦊",t:2,ab:{cap:1,cdr:.10},d:"เก็บสิทธิ์ฟรีได้เพิ่ม 1 และเวลารอลดลง 10%"},
 {n:"นกฮูกดวงดาว",e:"🦉",t:2,ab:{drop:1},d:"โอกาสเจอเพื่อนตัวน้อย +1%"},
 {n:"โลมาสายรุ้ง",e:"🐬",t:2,ab:{again:.15},d:"15% ที่เขย่าแล้วได้เขย่าฟรีอีกครั้ง"},
 {n:"ปลาหมึกแปดโชค",e:"🐙",t:2,ab:{cdr:.15},d:"เวลารอเขย่าฟรีลดลง 15%"},
 {n:"นกแก้วช่างพูด",e:"🦜",t:2,ab:{drop:1},d:"โอกาสเจอเพื่อนตัวน้อย +1%"},
 {n:"หมาป่าเดือนเพ็ญ",e:"🐺",t:2,ab:{again:.15},d:"15% ที่เขย่าแล้วได้เขย่าฟรีอีกครั้ง"},
 {n:"วาฬฝันหวาน",e:"🐳",t:2,ab:{cdr:.15},d:"เวลารอเขย่าฟรีลดลง 15%"},
 {n:"ผีเสื้อราตรี",e:"🦋",t:3,ab:{cdr:.25},d:"เวลารอเขย่าฟรีลดลง 25%"},
 {n:"ยูนิคอร์นเมฆ",e:"🦄",t:3,ab:{again:.25},d:"25% ที่เขย่าแล้วได้เขย่าฟรีอีกครั้ง"},
 {n:"หงส์ขาว",e:"🦢",t:3,ab:{burnFree:.5},d:"เผาใบแล้ว 50% ได้เขย่าฟรีทันที"},
 {n:"เสือขาวเฝ้าดวง",e:"🐯",t:3,ab:{drop:1.5},d:"โอกาสเจอเพื่อนตัวน้อย +1.5%"},
 {n:"สิงโตทอง",e:"🦁",t:3,ab:{cap:1,cdr:.20},d:"เก็บสิทธิ์ฟรีได้เพิ่ม 1 และเวลารอลดลง 20%"},
 {n:"น้องหมีเด้ง",e:"🐻",t:2,sp:1,purple:1,ab:{cdr:.10,again:.10},d:""},
 {n:"มังกรทอง",e:"🐉",t:4,ab:{again:.40},d:"40% ที่เขย่าแล้วได้เขย่าฟรีอีกครั้ง"},
 {n:"นกยูงราชินี",e:"🦚",t:4,ab:{baseMul:3},d:"โอกาสเจอเพื่อนพื้นฐาน x3 (5% เป็น 15%)"},
 {n:"ฟอร์จูนี่",img:1,t:4,ab:{extra:1},d:"ได้สิทธิ์เขย่าฟรีเพิ่มวันละ 1 ครั้ง"}
];
/* v2 companions: per-level skills, role, and three forms (emoji + name) */
const PET_EXTRA={"หอยทากใจเย็น": {"role": "time", "fn": ["หอยทากใจเย็น", "หอยทากนาฬิกาทราย", "ราชันหอยทากกาลเวลา"], "fe": ["🐌", "🐌", "🐌"], "lv": [{"cdr": 0.1, "cap": 1}, {"cdr": 0.15, "cap": 1}, {"cdr": 0.2, "cap": 1}]}, "เต่าน้อยมั่นคง": {"role": "pity", "fn": ["เต่าน้อยมั่นคง", "เต่าโล่ศิลา", "เต่าพิทักษ์พันปี"], "fe": ["🐢", "🐢", "🐢"], "lv": [{"pity": 1}, {"pity": 2}, {"pity": 3}]}, "ลูกเจี๊ยบตัวจิ๋ว": {"role": "gold", "fn": ["ลูกเจี๊ยบตัวจิ๋ว", "ไก่น้อยเปลวทอง", "พญาไก่เพลิงทอง"], "fe": ["🐣", "🐥", "🐓"], "lv": [{"gold": 0.12}, {"gold": 0.18}, {"gold": 0.26}]}, "แฮมสเตอร์แก้มป่อง": {"role": "star", "fn": ["แฮมสเตอร์แก้มป่อง", "แฮมสเตอร์คลังดาว", "เจ้าสัวแฮมสเตอร์"], "fe": ["🐹", "🐹", "🐹"], "lv": [{"star": 0.6}, {"star": 0.9}, {"star": 1.3}]}, "กบน้อยนำโชค": {"role": "again", "fn": ["กบน้อยนำโชค", "กบใบบัวสี่แฉก", "เจ้าชายกบโคลเวอร์"], "fe": ["🐸", "🐸", "🐸"], "lv": [{"again": 0.05}, {"again": 0.08}, {"again": 0.12}]}, "ผึ้งขยัน": {"role": "bp", "fn": ["ผึ้งขยัน", "ผึ้งเก็บเถ้าทอง", "ราชินีผึ้งเพลิง"], "fe": ["🐝", "🐝", "🐝"], "lv": [{"bp": 3}, {"bp": 5}, {"bp": 8}]}, "เต่าทองจุดดาว": {"role": "find", "fn": ["เต่าทองจุดดาว", "เต่าทองกล้องดาว", "เต่าทองนักดาราศาสตร์"], "fe": ["🐞", "🐞", "🐞"], "lv": [{"dropX": 0.19}, {"dropX": 0.28}, {"dropX": 0.42}]}, "เม่นขนนุ่ม": {"role": "ticket", "fn": ["เม่นขนนุ่ม", "เม่นหนามตั๋วทอง", "เม่นราชาบัตรนำโชค"], "fe": ["🦔", "🦔", "🦔"], "lv": [{"tg": 0.05}, {"tg": 0.07}, {"tg": 0.11}]}, "กระรอกเก็บโชค": {"role": "daily", "fn": ["กระรอกเก็บโชค", "กระรอกกล่องของขวัญ", "จอมกระรอกคลังของขวัญ"], "fe": ["🐿️", "🐿️", "🐿️"], "lv": [{"daily": 1}, {"daily": 2}, {"daily": 3}]}, "เพนกวินเดินเตาะแตะ": {"role": "dawn", "fn": ["เพนกวินเดินเตาะแตะ", "เพนกวินรับอรุณ", "จักรพรรดิเพนกวินรุ่งอรุณ"], "fe": ["🐧", "🐧", "🐧"], "lv": [{"fa": 0.12}, {"fa": 0.18}, {"fa": 0.28}]}, "หนอนน้อยรอบิน": {"role": "burnfree", "fn": ["หนอนน้อยรอบิน", "ดักแด้ใบไม้ไฟ", "ผีเสื้อเพลิงคืนชีพ"], "fe": ["🐛", "🐛", "🦋"], "lv": [{"burnFree": 0.15}, {"burnFree": 0.25}, {"burnFree": 0.34}]}, "กระต่ายจันทร์": {"role": "dawn", "fn": ["กระต่ายจันทร์", "กระต่ายกระโดดฟ้า", "เทพกระต่ายพระจันทร์"], "fe": ["🐰", "🐇", "🐇"], "lv": [{"fa": 0.22}, {"fa": 0.32}, {"fa": 0.45}]}, "แพนด้าฟูฟู": {"role": "find", "fn": ["แพนด้าฟูฟู", "แพนด้านักสำรวจ", "แพนด้ามหาปราชญ์ไผ่ทอง"], "fe": ["🐼", "🐼", "🐼"], "lv": [{"dropX": 0.33}, {"dropX": 0.48}, {"dropX": 0.67}]}, "แมวนำโชค": {"role": "again", "fn": ["แมวนำโชค", "แมวกวักทองคำ", "เทพแมวกวักเก้าชีวิต"], "fe": ["🐱", "🐈", "🐈‍⬛"], "lv": [{"again": 0.1}, {"again": 0.13}, {"again": 0.18}]}, "หมาน้อยซื่อสัตย์": {"role": "pity", "fn": ["หมาน้อยซื่อสัตย์", "หมาพิทักษ์", "อัศวินสุนัขโล่ทอง"], "fe": ["🐶", "🐕", "🐕‍🦺"], "lv": [{"pity": 2}, {"pity": 3}, {"pity": 4}]}, "โคอาล่าขี้เซา": {"role": "time", "fn": ["โคอาล่าขี้เซา", "โคอาล่าหมอนเมฆ", "ราชาโคอาล่านิทรา"], "fe": ["🐨", "🐨", "🐨"], "lv": [{"cdr": 0.17, "cap": 1}, {"cdr": 0.26, "cap": 1}, {"cdr": 0.32, "cap": 2}]}, "หมูนำทรัพย์": {"role": "star", "fn": ["หมูนำทรัพย์", "หมูออมสินทอง", "เทพหมูมหาเศรษฐี"], "fe": ["🐷", "🐖", "🐖"], "lv": [{"star": 1}, {"star": 1.45}, {"star": 2}]}, "หมีน้ำผึ้ง": {"role": "daily", "fn": ["หมีน้ำผึ้ง", "หมีโหลน้ำผึ้งทอง", "ราชาหมีคลังน้ำผึ้ง"], "fe": ["🐻", "🐻", "🐻"], "lv": [{"daily": 2}, {"daily": 3}, {"daily": 4}]}, "เป็ดน้อยลอยน้ำ": {"role": "bp", "fn": ["เป็ดน้อยลอยน้ำ", "เป็ดเปลวเทียน", "พญาเป็ดเพลิงทอง"], "fe": ["🦆", "🦆", "🦆"], "lv": [{"bp": 5}, {"bp": 8}, {"bp": 12}]}, "แกะขนเมฆ": {"role": "burnfree", "fn": ["แกะขนเมฆ", "แกะเมฆสายฟ้า", "แกะเขาทองเหนือเมฆ"], "fe": ["🐑", "🐑", "🐏"], "lv": [{"burnFree": 0.28}, {"burnFree": 0.4}, {"burnFree": 0.55}]}, "จิ้งจอกไพ่ทาโรต์": {"role": "ticket", "fn": ["จิ้งจอกไพ่ทาโรต์", "จิ้งจอกสองหางพยากรณ์", "จิ้งจอกเก้าหางแห่งชะตา"], "fe": ["🦊", "🦊", "🦊"], "lv": [{"tg": 0.15}, {"tg": 0.22}, {"tg": 0.32}]}, "นกฮูกดวงดาว": {"role": "find", "fn": ["นกฮูกดวงดาว", "นกฮูกส่องจักรวาล", "มหาปราชญ์นกฮูกดาราจักร"], "fe": ["🦉", "🦉", "🦉"], "lv": [{"dropX": 0.52}, {"dropX": 0.76}, {"dropX": 1.07}]}, "โลมาสายรุ้ง": {"role": "again", "fn": ["โลมาสายรุ้ง", "โลมาคลื่นรุ้ง", "เทพโลมาประตูรุ้ง"], "fe": ["🐬", "🐬", "🐬"], "lv": [{"again": 0.15}, {"again": 0.2}, {"again": 0.26}]}, "ปลาหมึกแปดโชค": {"role": "gold", "fn": ["ปลาหมึกแปดโชค", "ปลาหมึกแปดเปลว", "ราชันหมึกเพลิงแปดทิศ"], "fe": ["🐙", "🐙", "🐙"], "lv": [{"gold": 0.18, "bp": 1}, {"gold": 0.26, "bp": 2}, {"gold": 0.35, "bp": 3}]}, "นกแก้วช่างพูด": {"role": "daily", "fn": ["นกแก้วช่างพูด", "นกแก้วพรายของขวัญ", "นกแก้วทูตสวรรค์"], "fe": ["🦜", "🦜", "🦜"], "lv": [{"daily": 4}, {"daily": 5}, {"daily": 7}]}, "หมาป่าเดือนเพ็ญ": {"role": "dawn", "fn": ["หมาป่าเดือนเพ็ญ", "หมาป่าหอนรุ่งอรุณ", "ราชาหมาป่าจันทรา"], "fe": ["🐺", "🐺", "🐺"], "lv": [{"fa": 0.35}, {"fa": 0.5}, {"fa": 0.7}]}, "วาฬฝันหวาน": {"role": "time", "fn": ["วาฬฝันหวาน", "วาฬนาฬิกาฝัน", "วาฬจักรวาลนิรันดร์"], "fe": ["🐳", "🐋", "🐋"], "lv": [{"cdr": 0.24, "cap": 1}, {"cdr": 0.32, "cap": 2}, {"cdr": 0.45, "cap": 2}]}, "ผีเสื้อราตรี": {"role": "time", "fn": ["ผีเสื้อราตรี", "ผีเสื้อจันทร์คราส", "ราชินีผีเสื้อรัตติกาล"], "fe": ["🦋", "🦋", "🦋"], "lv": [{"cdr": 0.3, "cap": 1, "fa": 0.15}, {"cdr": 0.38, "cap": 2, "fa": 0.2}, {"cdr": 0.45, "cap": 2, "fa": 0.3}]}, "ยูนิคอร์นเมฆ": {"role": "again", "fn": ["ยูนิคอร์นเมฆ", "ยูนิคอร์นสายรุ้ง", "ยูนิคอร์นจักรวาล"], "fe": ["🦄", "🦄", "🦄"], "lv": [{"again": 0.22}, {"again": 0.28}, {"again": 0.35}]}, "หงส์ขาว": {"role": "burnfree", "fn": ["หงส์ขาว", "หงส์เพลิงเงิน", "หงส์ฟีนิกซ์ขาว"], "fe": ["🦢", "🦢", "🦢"], "lv": [{"burnFree": 0.4, "gold": 0.08, "bp": 2}, {"burnFree": 0.5, "gold": 0.12, "bp": 3}, {"burnFree": 0.6, "gold": 0.14, "bp": 3}]}, "เสือขาวเฝ้าดวง": {"role": "find", "fn": ["เสือขาวเฝ้าดวง", "เสือขาวลายดาว", "พยัคฆ์ขาวเทวะ"], "fe": ["🐯", "🐅", "🐅"], "lv": [{"dropX": 0.6, "pity": 2}, {"dropX": 0.85, "pity": 3}, {"dropX": 1.2, "pity": 4}]}, "สิงโตทอง": {"role": "star", "fn": ["สิงโตทอง", "สิงโตแผงตะวัน", "ราชสีห์จักรพรรดิทอง"], "fe": ["🦁", "🦁", "🦁"], "lv": [{"star": 1.2, "daily": 2}, {"star": 1.6, "daily": 3}, {"star": 2.2, "daily": 5}]}, "น้องหมีเด้ง": {"role": "time", "fn": ["น้องหมีเด้ง", "หมีเด้งเด้ง", "ราชาหมีเด้งม่วงทอง"], "fe": ["🐻", "🐻", "🐻"], "lv": [{"cdr": 0.08, "cap": 1, "again": 0.05}, {"cdr": 0.15, "cap": 1, "again": 0.09}, {"cdr": 0.22, "cap": 1, "again": 0.15}]}, "มังกรทอง": {"role": "again", "fn": ["มังกรทอง", "มังกรทองเหินฟ้า", "จักรพรรดิมังกรทอง"], "fe": ["🐲", "🐉", "🐉"], "lv": [{"again": 0.33}, {"again": 0.42}, {"again": 0.52, "againCap": 0.55}]}, "นกยูงราชินี": {"role": "find", "fn": ["นกยูงราชินี", "นกยูงรำแพน", "เทพีนกยูงพันดาว"], "fe": ["🦚", "🦚", "🦚"]}, "ฟอร์จูนี่": {"role": "extra", "fn": ["ฟอร์จูนี่", "ฟอร์จูนี่ปีกแสง", "เทพธิดาฟอร์จูนี่"], "lv": [{"extra": 1}, {"extra": 1, "cdr": 0.15, "fa": 0.3}, {"extra": 1, "cdr": 0.3, "cap": 1, "fa": 0.6}]}};
PETS.forEach(p=>Object.assign(p,PET_EXTRA[p.n]||{}));

function Game(init, nowBase, admin) {
  let S = init;
  const now = () => nowBase + (admin ? (S && S.skew) || 0 : 0);
  function rnd() { const a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] / 4294967296; }
/* ===== Fortunie Siamsi game core — shared by server (authoritative) and client (display only) =====
   Expects globals: F, LV, RAR, PETS, S (state), now(), rnd() */
const GOLD_P=.10,JAR=100,BASE_DROP=10,BURN_PTS=3,GOLD_X=5,JAR_ODDS=[[2,80],[3,15],[4,5]],SHARD_GET=[1,1,1,2,2],SHARD_COST=[10,8,6,5,4],
  DAY=24*3600e3,BASE_WAIT=DAY,CDR_CAP=.50,AGAIN_CAP=.50,BURNFREE_CAP=.60,PITY=10,EXP=7*DAY,MAXLV=3,COST=10,INV_MAX=30,LUCKY=22,TZ=7*3600e3;
const LVM=[1,1.5,2];
const LVPOW={"ดีมาก":.10,"ดี":.06,"ค่อยเป็นค่อยไป":.03};
const BUFF=[{n:"โชคพบเพื่อน",d:s=>`โอกาสเจอเพื่อนเพิ่มขึ้น ${Math.round(s*100)}% ทั้งวัน`},{n:"โชคเวลา",d:s=>`เวลารอเขย่าฟรีลดลง ${Math.round(s*100)}% ทั้งวัน`},{n:"โชคซ้ำ",d:s=>`โอกาสได้เขย่าฟรีซ้ำ +${Math.round(s*100)}% ทั้งวัน`}];
const REW=[{s:5},{s:5},{s:10},{s:10},{s:15},{s:20},{pet:"น้องหมีเด้ง"}];
const DEFAULT_PACKS=[{baht:49,stars:50},{baht:99,stars:110,tag:"คุ้มกว่า 10%"},{baht:199,stars:240,tag:"แถม 40 ดาว"},{baht:399,stars:520,tag:"แถม 120 ดาว"}];
const NEED_T=[[1,2,8],[1,2,6],[1,2,5],[1,2,4],[1,2,3]];
const NEED=p=>NEED_T[p?p.t:2]||[1,2,3];
const lvOf=(k,p)=>{const n=NEED(p);let l=1;for(let i=1;i<n.length;i++)if((k||1)>=n[i])l=i+1;return l};
const maxCopies=p=>NEED(p)[MAXLV-1];
const toNext=(k,p)=>{const L=lvOf(k,p);return L<MAXLV?NEED(p)[L]-(k||0):0};
/* day key in Thailand time, so check-in resets at local midnight on server and client alike */
const dk=t=>{const d=new Date(t+TZ);return d.getUTCFullYear()+"-"+(d.getUTCMonth()+1)+"-"+d.getUTCDate()};

function fresh(){return{v:6,stars:30,owned:{},buddy:null,shakes:0,petDrops:0,spent:0,topBaht:0,burned:0,rar:[0,0,0,0,0],lv:{"ดีมาก":0,"ดี":0,"ค่อยเป็นค่อยไป":0},
  charges:1,regenAt:0,skew:0,last:null,pend:null,bonusFree:0,bp:0,jarT:0,jars:0,golds:0,shards:[0,0,0,0,0],inv:[],active:null,useReadyAt:0,tickets:0,pity:0,
  streakN:0,streakDay:"",inbox:[]}}
function norm(){if(!Array.isArray(S.shards))S.shards=[0,0,0,0,0];if(!Array.isArray(S.inv))S.inv=[];if(!Array.isArray(S.inbox))S.inbox=[];if(!S.owned)S.owned={};if(!Array.isArray(S.rar))S.rar=[0,0,0,0,0]}

function buffOf(f){return{type:f%3,s:LVPOW[F[f][0]]}}
function activeBuff(){return S.active&&S.active.until>now()?Object.assign(buffOf(S.active.f),{f:S.active.f}):null}
function buddyPet(){const i=S.buddy;return i!=null&&PETS[i]&&S.owned[PETS[i].n]?PETS[i]:null}
function powers(){const P={cdr:0,drop:0,dropX:0,again:0,cap:0,star:0,burnFree:0,extra:0,baseMul:1,gold:0,bp:0,pity:0,daily:0,tg:0,fa:0,bf:0,againCap:AGAIN_CAP};
  const p=buddyPet();if(p){const L=lvOf(S.owned[p.n],p);
    if(p.lv){Object.assign(P,p.lv[L-1]);if(!P.baseMul)P.baseMul=1;if(!P.againCap)P.againCap=AGAIN_CAP}
    else{const a=p.ab,m=LVM[L-1];P.cdr=(a.cdr||0)*m;P.drop=(a.drop||0)*m;P.again=(a.again||0)*m;P.cap=a.cap||0;P.star=Math.round((a.star||0)*m);P.extra=a.extra||0;if(a.baseMul)P.baseMul=a.baseMul+(m-1);if(a.burnFree)P.burnFree=a.burnFree*m}}
  P.cdr=Math.min(CDR_CAP,P.cdr);P.again=Math.min(P.againCap,P.again);P.burnFree=Math.min(BURNFREE_CAP,P.burnFree);P.max=1+P.cap+P.extra;P.wait=BASE_WAIT*(1-P.cdr)/(1+P.extra);P.dropPct=BASE_DROP*P.baseMul*(1+P.dropX)+P.drop;
  const b=activeBuff();if(b){b.s+=P.bf;P.buff=b;if(b.type===0)P.dropPct*=1+b.s;if(b.type===1)P.wait*=1-b.s;if(b.type===2)P.again=Math.min(P.againCap,P.again+b.s)}
  return P}
function regen(){const P=powers();if(S.charges>=P.max){S.regenAt=0;return}
  if(!S.regenAt)S.regenAt=now()+P.wait;
  while(S.charges<P.max&&now()>=S.regenAt){S.charges++;S.regenAt=S.charges<P.max?S.regenAt+P.wait:0}}
function prune(){const before=S.inv.length;S.inv=S.inv.filter(it=>!it.at||now()-it.at<EXP);const gone=before-S.inv.length;if(gone)S.stars+=gone;return gone}
const freeLeft=()=>S.charges+S.bonusFree;
function canUseToday(){return !(S.useReadyAt>now())&&!activeBuff()}
const streakState=()=>{const today=dk(now()),yest=dk(now()-DAY),claimed=S.streakDay===today;return{claimed,next:claimed?S.streakN:(S.streakDay===yest?S.streakN%7+1:1)}};

function pickRarity(){let r=rnd()*100;for(let i=0;i<RAR.length;i++){if(r<RAR[i].share)return i;r-=RAR[i].share}return 0}
function giveCopy(pi){const p=PETS[pi],n=p.n,isNew=!S.owned[n];S.owned[n]=(S.owned[n]||0)+1;let shard=0;
  if(S.owned[n]>maxCopies(p)){shard=SHARD_GET[p.t];S.shards[p.t]=(S.shards[p.t]||0)+shard}
  if(S.buddy==null)S.buddy=pi;return{pi,isNew,shard,k:S.owned[n]}}
function poolOf(t){return PETS.map((p,i)=>i).filter(i=>PETS[i].t===t&&!PETS[i].sp)}
function rollPet(){const r=pickRarity(),pool=poolOf(r),pi=pool[Math.floor(rnd()*pool.length)];S.rar[r]++;S.petDrops++;S.pity=0;return giveCopy(pi)}
function addInv(f){S.inv.unshift({id:String(now())+String(Math.floor(rnd()*1e6)),f,at:now()});if(S.inv.length>INV_MAX)S.inv.length=INV_MAX}
function activate(f){S.active={f,until:now()+DAY};S.useReadyAt=now()+DAY}

/* ----- actions (server runs these; each throws a Thai message on misuse) ----- */
function settlePending(){if(S.pend){addInv(S.pend.f);if(S.last)S.last.fate="kept";S.pend=null}}
function actShake(paid){settlePending();regen();const P=powers();
  if(S.bonusFree>0)S.bonusFree--;
  else if(S.charges>0){S.charges--;if(!S.regenAt)S.regenAt=now()+P.wait}
  else if(paid){if(S.stars<COST)throw "ดาวไม่พอ เติมดาวก่อนนะคะ";S.stars-=COST;S.spent+=COST}
  else throw "ยังไม่มีสิทธิ์เขย่าฟรี";
  const f=Math.floor(rnd()*F.length);S.lv[F[f][0]]=(S.lv[F[f][0]]||0)+1;S.shakes++;S.starFrac=(S.starFrac||0)+P.star;const ws=Math.floor(S.starFrac+1e-9);S.stars+=ws;S.starFrac-=ws;
  let tg=false;if(F[f][0]==="ดีมาก"&&P.tg&&rnd()<P.tg){S.tickets++;tg=true}
  let fa=false;const today=dk(now());if(S.faDay!==today){S.faDay=today;if(P.fa&&rnd()<P.fa){S.bonusFree++;fa=true}}
  const ticket=f===LUCKY;if(ticket)S.tickets++;
  S.pity=(S.pity||0)+1;let pet=null,isNew=false,shard=0;
  if(S.petDrops===0||S.pity>=PITY-P.pity||rnd()*100<P.dropPct){const r=rollPet();pet=r.pi;isNew=r.isNew;shard=r.shard}
  const again=rnd()<P.again;if(again)S.bonusFree++;
  const cur={f,pet,isNew,shard,again,ticket,tg,fa,at:now(),fate:"pending"};S.last=cur;S.pend={f};return cur}
function burnReward(){const P=powers(),gold=rnd()<GOLD_P+P.gold,pts=(BURN_PTS+P.bp)*(gold?GOLD_X:1);S.burned++;if(gold){S.bonusFree++;S.golds=(S.golds||0)+1}
  const lucky=!!(P.burnFree&&rnd()<P.burnFree);if(lucky)S.bonusFree++;
  const before=S.bp||0;S.bp=before+pts;let jar=0;while(S.bp>=JAR){S.bp-=JAR;S.jarT=(S.jarT||0)+1;S.jars=(S.jars||0)+1;jar++}
  return{gold,pts,jar,lucky,before}}
function actDecide(fate){if(!S.pend)throw "ไม่มีใบที่รอเลือก";const f=S.pend.f;S.pend=null;
  if(fate==="use"){if(!canUseToday()){addInv(f);if(S.last)S.last.fate="kept";return{fate:"kept",f}}activate(f);if(S.last)S.last.fate="used";return{fate:"used",f}}
  if(fate==="burn"){const r=burnReward();if(S.last)S.last.fate="burned";return Object.assign({fate:"burned",f},r)}
  addInv(f);if(S.last)S.last.fate="kept";return{fate:"kept",f}}
function invIndex(id){const i=S.inv.findIndex(x=>x.id===id);if(i<0)throw "ไม่พบใบนี้ในคลัง";return i}
function actUseSlip(id){settlePending();const i=invIndex(id);if(!canUseToday())throw "วันนี้ใช้ดวงไปแล้ว";const f=S.inv[i].f;S.inv.splice(i,1);activate(f);return{f}}
function actBurnSlip(id){settlePending();const i=invIndex(id);const f=S.inv[i].f;S.inv.splice(i,1);return Object.assign({f},burnReward())}
function actTicket(){settlePending();if(S.tickets<1)throw "ไม่มีตั๋วสุ่มเพื่อน";S.tickets--;return rollPet()}
function actJar(){settlePending();if(!(S.jarT>0))throw "ยังไม่มีโหลขี้เถ้าเต็ม";S.jarT--;let r=rnd()*100,t=2;for(const [tt,w] of JAR_ODDS){if(r<w){t=tt;break}r-=w}
  const pool=poolOf(t),pi=pool[Math.floor(rnd()*pool.length)];S.rar[t]++;return giveCopy(pi)}
function actExchange(t,pi){settlePending();t=+t;pi=+pi;const p=PETS[pi];if(!p||p.t!==t||p.sp)throw "เลือกเพื่อนไม่ถูกระดับ";
  if((S.shards[t]||0)<SHARD_COST[t])throw "เศษไม่พอ";if((S.owned[p.n]||0)>=maxCopies(p))throw "ตัวนี้เก็บครบแล้ว";S.shards[t]-=SHARD_COST[t];return giveCopy(pi)}
function actBuddy(pi){pi=+pi;const p=PETS[pi];if(!p||!S.owned[p.n])throw "ยังไม่มีเพื่อนตัวนี้";S.buddy=pi;return{pi}}
function actDaily(){const st=streakState();if(st.claimed)throw "รับของวันนี้ไปแล้ว";S.streakN=st.next;S.streakDay=dk(now());const r=REW[S.streakN-1];
  const dp=powers().daily||0;S.stars+=dp;if(r.s)S.stars+=r.s;if(r.pet)giveCopy(PETS.findIndex(p=>p.n===r.pet));return{day:S.streakN,s:(r.s||0)+dp,bonus:dp,pet:r.pet||null}}
function summary(){return{stars:S.stars,shakes:S.shakes,pets:PETS.filter(p=>S.owned[p.n]).length,topBaht:S.topBaht||0,tickets:S.tickets,bp:S.bp||0,jarT:S.jarT||0}}

  return { get S() { return S; }, set S(v) { S = v; }, admin, fresh,norm,prune,regen,summary,powers,actShake,actDecide,actUseSlip,actBurnSlip,actTicket,actJar,actExchange,actBuddy,actDaily,DEFAULT_PACKS,now };
}


const SB_URL = Deno.env.get("SUPABASE_URL");
const SB_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const sb = createClient(SB_URL, SB_KEY, { auth: { persistSession: false, autoRefreshToken: false } });
const EMAIL_DOMAIN = "players.fortunie.app";
const LOGIN_RE = /^[a-z0-9_]{3,16}$/;
const CORS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type", "Access-Control-Allow-Methods": "POST, OPTIONS" };
const TEST_CODES = { "TEST-TICKET": { t: 1 }, "TEST-STAR50": { s: 50 } };

function rnd() { const a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] / 4294967296; }
const BASE = Game(null, 0, false);
const fresh = BASE.fresh, DEFAULT_PACKS = BASE.DEFAULT_PACKS;
const out = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });
const fail = (msg, status = 400) => out({ error: String(msg) }, status);
const cleanName = v => String(v || "").replace(/[\u0000-\u001f<>]/g, "").replace(/\s+/g, " ").trim().slice(0, 16);
const int = (v, lo, hi) => { const n = Math.trunc(Number(v) || 0); return Math.max(lo, Math.min(hi, n)); };

async function getConfig() { const { data } = await sb.from("config").select("pay,ann,maint,packs").eq("id", 1).single(); return data || { pay: "", ann: "", maint: false, packs: DEFAULT_PACKS }; }
async function loadState(uid) {
  const { data } = await sb.from("player_state").select("state,ver").eq("id", uid).maybeSingle();
  return data ? { st: Object.assign(fresh(), data.state), ver: data.ver } : { st: fresh(), ver: -1 };
}
async function saveState(uid, st, ver) {
  if (ver < 0) { const { error } = await sb.from("player_state").insert({ id: uid, state: st, ver: 0 }); if (error) throw "บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง"; return 0; }
  const { data, error } = await sb.from("player_state").update({ state: st, ver: ver + 1, updated_at: new Date().toISOString() }).eq("id", uid).eq("ver", ver).select("ver");
  if (error || !data || !data.length) throw "มีการเล่นจากอีกหน้าพร้อมกัน ลองใหม่อีกครั้ง";
  return ver + 1;
}
const log = (user_id, kind, data, actor) => sb.from("events").insert({ user_id, kind, data, actor: actor || user_id });
async function genCode() { for (let i = 0; i < 20; i++) { const c = "FTN-" + (1000 + Math.floor(rnd() * 9000)); const { data } = await sb.from("profiles").select("id").eq("code", c).maybeSingle(); if (!data) return c; } return "FTN-" + Date.now().toString().slice(-6); }

/* run a mutation against another player's state (admin actions) */
async function withPlayer(uid, fn) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const { st, ver } = await loadState(uid); const G = Game(st, Date.now(), false); G.norm();
    fn(G);
    try { await saveState(uid, G.S, ver); return; } catch (e) { if (attempt === 2) throw e; }
  }
}
const inbox = (G, msg) => { G.S.inbox.push({ at: Date.now(), msg }); if (G.S.inbox.length > 20) G.S.inbox.splice(0, G.S.inbox.length - 20); };

async function signUp(p) {
  const login = String(p.login || "").trim().toLowerCase(), pass = String(p.password || ""), name = cleanName(p.name) || login;
  if (!LOGIN_RE.test(login)) return fail("ไอดีใช้ได้เฉพาะ a-z 0-9 และ _ ยาว 3–16 ตัว");
  if (pass.length < 6 || pass.length > 72) return fail("รหัสผ่านต้องยาว 6 ตัวขึ้นไป");
  const { data: dup } = await sb.from("profiles").select("id").eq("login", login).maybeSingle();
  if (dup) return fail("ไอดีนี้มีคนใช้แล้ว ลองไอดีอื่นนะคะ");
  const code = await genCode();
  const { data, error } = await sb.auth.admin.createUser({ email: `${login}@${EMAIL_DOMAIN}`, password: pass, email_confirm: true, user_metadata: { login } });
  if (error || !data.user) return fail(error && /already/i.test(error.message) ? "ไอดีนี้มีคนใช้แล้ว ลองไอดีอื่นนะคะ" : "สมัครไม่สำเร็จ ลองใหม่อีกครั้ง");
  const uid = data.user.id;
  const { error: e2 } = await sb.from("profiles").insert({ id: uid, login, name, code });
  if (e2) { await sb.auth.admin.deleteUser(uid); return fail("สมัครไม่สำเร็จ ลองใหม่อีกครั้ง"); }
  await sb.from("player_state").insert({ id: uid, state: fresh(), ver: 0 });
  await log(uid, "signup", { login });
  return out({ ok: true, email: `${login}@${EMAIL_DOMAIN}` });
}

async function adminList() {
  const [{ data: profs }, { data: states }, { data: pend }, { data: hist }, { data: codes }] = await Promise.all([
    sb.from("profiles").select("id,login,name,code,is_admin,banned,ban_reason,created_at,last_seen").order("last_seen", { ascending: false }).limit(500),
    sb.from("player_state").select("id,state").limit(500),
    sb.from("topups").select("*").eq("status", "pending").order("created_at").limit(100),
    sb.from("topups").select("*").neq("status", "pending").order("done_at", { ascending: false }).limit(30),
    sb.from("codes").select("*").order("created_at", { ascending: false }).limit(200),
  ]);
  const sum = {}; for (const r of states || []) { const G = Game(Object.assign(fresh(), r.state), Date.now(), false); G.norm(); sum[r.id] = G.summary(); }
  const sign = async (rows) => Promise.all((rows || []).map(async r => { let url = ""; if (r.slip_path) { const { data } = await sb.storage.from("slips").createSignedUrl(r.slip_path, 3600); url = data ? data.signedUrl : ""; } return { ...r, slip_url: url }; }));
  return { players: (profs || []).map(p => ({ ...p, ...(sum[p.id] || {}) })), pending: await sign(pend), history: await sign(hist), codes: codes || [] };
}

async function adminAction(a, p, me) {
  const uid = p.uid;
  const prof = async () => { const { data } = await sb.from("profiles").select("*").eq("id", uid).single(); if (!data) throw "ไม่พบผู้เล่น"; return data; };
  if (a === "adm_list") return await adminList();
  if (a === "adm_topup") {
    const { data: t } = await sb.from("topups").select("*").eq("id", p.id).single(); if (!t || t.status !== "pending") throw "คำขอนี้ถูกจัดการไปแล้ว";
    const { data: upd } = await sb.from("topups").update({ status: p.ok ? "approved" : "rejected", reason: p.ok ? "" : String(p.reason || "").slice(0, 80), done_at: new Date().toISOString() }).eq("id", t.id).eq("status", "pending").select("id");
    if (!upd || !upd.length) throw "คำขอนี้ถูกจัดการไปแล้ว";
    if (p.ok) await withPlayer(t.user_id, G => { G.S.stars += t.stars; G.S.topBaht = (G.S.topBaht || 0) + t.baht; inbox(G, `เติม ${t.baht} บาทสำเร็จ +${t.stars} ดาว`); });
    else await withPlayer(t.user_id, G => inbox(G, `คำขอเติม ${t.baht} บาทไม่ผ่าน${p.reason ? " · " + String(p.reason).slice(0, 80) : ""}`));
    await log(t.user_id, p.ok ? "topup_ok" : "topup_no", { id: t.id, baht: t.baht, stars: t.stars }, me);
    return { ok: true };
  }
  if (a === "adm_give") {
    await prof(); const s = int(p.s, -99999, 99999), t = int(p.t, -99, 99), note = String(p.note || "").slice(0, 60);
    await withPlayer(uid, G => { G.S.stars = Math.max(0, G.S.stars + s); G.S.tickets = Math.max(0, G.S.tickets + t); inbox(G, `แอดมิน${s < 0 || t < 0 ? "ปรับ" : "ส่ง"}ของให้${s ? " " + (s > 0 ? "+" : "") + s + " ดาว" : ""}${t ? " ตั๋ว " + (t > 0 ? "+" : "") + t : ""}${note ? " · " + note : ""}`); });
    await log(uid, "give", { s, t, note }, me); return { ok: true };
  }
  if (a === "adm_ban") { await prof(); await sb.from("profiles").update({ banned: !!p.ban, ban_reason: String(p.reason || "").slice(0, 80) }).eq("id", uid); await log(uid, p.ban ? "ban" : "unban", { reason: p.reason }, me); return { ok: true }; }
  if (a === "adm_rename") { await prof(); const name = cleanName(p.name); if (!name) throw "ชื่อว่างไม่ได้"; await sb.from("profiles").update({ name }).eq("id", uid); return { ok: true }; }
  if (a === "adm_reset") { const pr = await prof(); await withPlayer(uid, G => { const keepIn = G.S.inbox; G.S = fresh(); G.S.inbox = keepIn; inbox(G, "แอดมินล้างข้อมูลเกมของคุณแล้ว"); }); await log(uid, "reset", { login: pr.login }, me); return { ok: true }; }
  if (a === "adm_pass") { await prof(); const pass = String(p.password || ""); if (pass.length < 6) throw "รหัสผ่านต้องยาว 6 ตัวขึ้นไป"; const { error } = await sb.auth.admin.updateUserById(uid, { password: pass }); if (error) throw "ตั้งรหัสใหม่ไม่สำเร็จ"; await log(uid, "setpass", {}, me); return { ok: true }; }
  if (a === "adm_admin") { await prof(); if (uid === me) throw "ปลดสิทธิ์ตัวเองไม่ได้"; await sb.from("profiles").update({ is_admin: !!p.on }).eq("id", uid); await log(uid, "admin", { on: !!p.on }, me); return { ok: true }; }
  if (a === "adm_cfg") {
    const packs = (Array.isArray(p.packs) ? p.packs : []).map(x => ({ baht: int(x.baht, 0, 100000), stars: int(x.stars, 0, 1000000), tag: String(x.tag || "").slice(0, 20) })).filter(x => x.baht > 0 && x.stars > 0).slice(0, 8);
    if (!packs.length) throw "ต้องมีแพ็กอย่างน้อย 1 แพ็ก";
    await sb.from("config").update({ pay: String(p.pay || "").slice(0, 300), ann: String(p.ann || "").slice(0, 120), maint: !!p.maint, packs, updated_at: new Date().toISOString() }).eq("id", 1);
    return { ok: true };
  }
  if (a === "adm_code") {
    const code = String(p.code || "").trim().toUpperCase().replace(/[^A-Z0-9_-]/g, "").slice(0, 24); if (!code) throw "ใส่โค้ดก่อน";
    if (p.toggle) { await sb.from("codes").update({ off: !!p.off }).eq("code", code); return { ok: true }; }
    const s = int(p.s, 0, 99999), t = int(p.t, 0, 99); if (!s && !t) throw "ใส่ดาวหรือตั๋วอย่างน้อย 1 อย่าง";
    const { error } = await sb.from("codes").upsert({ code, s, t, note: String(p.note || "").slice(0, 60), off: false }); if (error) throw "สร้างโค้ดไม่สำเร็จ";
    return { ok: true, code };
  }
  if (a === "adm_delslip") { const { data: t } = await sb.from("topups").select("slip_path").eq("id", p.id).single(); if (t && t.slip_path) await sb.storage.from("slips").remove([t.slip_path]); await sb.from("topups").update({ slip_path: null }).eq("id", p.id); return { ok: true }; }
  throw "คำสั่งไม่ถูกต้อง";
}

async function submitTopup(uid, prof, p, cfg) {
  const packs = Array.isArray(cfg.packs) && cfg.packs.length ? cfg.packs : DEFAULT_PACKS; const pk = packs[int(p.pack, 0, packs.length - 1)];
  if (!pk) throw "เลือกแพ็กก่อน";
  const m = /^data:(image\/(jpeg|png|webp));base64,(.+)$/.exec(String(p.img || "")); if (!m) throw "แนบรูปสลิปก่อนนะคะ";
  const bytes = Uint8Array.from(atob(m[3]), c => c.charCodeAt(0)); if (bytes.length > 4.5 * 1024 * 1024) throw "รูปใหญ่เกินไป";
  const { count } = await sb.from("topups").select("id", { count: "exact", head: true }).eq("user_id", uid).eq("status", "pending");
  if ((count || 0) >= 5) throw "มีคำขอรอตรวจอยู่หลายรายการแล้ว รอแอดมินตรวจก่อนนะคะ";
  const id = crypto.randomUUID(), path = `${uid}/${id}.${m[2] === "jpeg" ? "jpg" : m[2]}`;
  const { error } = await sb.storage.from("slips").upload(path, bytes, { contentType: m[1] }); if (error) throw "อัปโหลดสลิปไม่สำเร็จ";
  await sb.from("topups").insert({ id, user_id: uid, baht: pk.baht, stars: pk.stars, slip_path: path });
  await log(uid, "topup_req", { id, baht: pk.baht });
  return { ok: true };
}

async function redeem(G, uid, code) {
  const S = G.S, ADMIN = G.admin;
  code = String(code || "").trim().toUpperCase().replace(/[^A-Z0-9_-]/g, "").slice(0, 24); if (!code) throw "ใส่โค้ดก่อนนะคะ";
  let c = null; const { data } = await sb.from("codes").select("*").eq("code", code).maybeSingle(); if (data && !data.off) c = data;
  if (!c && ADMIN && TEST_CODES[code]) { if ((S.redeemedTest || []).includes(code)) throw "โค้ดนี้ใช้ไปแล้ว"; S.redeemedTest = (S.redeemedTest || []).concat(code); c = TEST_CODES[code]; }
  else { if (!c) throw "โค้ดนี้ใช้ไม่ได้ ลองเช็กตัวสะกดอีกครั้ง"; const { error } = await sb.from("redemptions").insert({ code, user_id: uid }); if (error) throw "โค้ดนี้ใช้ไปแล้ว"; }
  if (c.s) S.stars += +c.s; if (c.t) S.tickets += +c.t; await log(uid, "redeem", { code });
  return { s: +c.s || 0, t: +c.t || 0 };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  let p; try { p = await req.json(); } catch { return fail("bad request"); }
  const a = String(p.action || "");
  try {
    if (a === "signup") return await signUp(p);
    if (a === "config") { const c = await getConfig(); return out({ cfg: { ann: c.ann, maint: c.maint } }); }
    const token = (req.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
    const { data: ud, error: ue } = await sb.auth.getUser(token);
    if (ue || !ud || !ud.user) return fail("กรุณาเข้าสู่ระบบใหม่", 401);
    const uid = ud.user.id;
    const { data: prof } = await sb.from("profiles").select("*").eq("id", uid).single();
    if (!prof) return fail("ไม่พบบัญชีผู้เล่น", 401);
    const ADMIN = !!prof.is_admin;
    const cfg = await getConfig();
    if (prof.banned && !ADMIN) return out({ locked: "ban", reason: prof.ban_reason, profile: { name: prof.name, code: prof.code } });
    if (cfg.maint && !ADMIN) return out({ locked: "maint", profile: { name: prof.name, code: prof.code } });
    if (a.startsWith("adm_")) { if (!ADMIN) return fail("ต้องเป็นแอดมิน", 403); return out({ res: await adminAction(a, p, uid) }); }

    let res = null, G = null;
    for (let attempt = 0; attempt < 3; attempt++) {
      const { st, ver } = await loadState(uid); G = Game(st, Date.now(), ADMIN); G.norm();
      const expired = G.prune(); G.regen();
      switch (a) {
        case "me": res = { expired }; break;
        case "shake": res = G.actShake(!!p.paid); break;
        case "decide": res = G.actDecide(String(p.fate)); break;
        case "use_slip": res = G.actUseSlip(String(p.id)); break;
        case "burn_slip": res = G.actBurnSlip(String(p.id)); break;
        case "ticket": res = G.actTicket(); break;
        case "jar": res = G.actJar(); break;
        case "exchange": res = G.actExchange(p.t, p.pi); break;
        case "buddy": res = G.actBuddy(p.pi); break;
        case "daily": res = G.actDaily(); break;
        case "ack": G.S.inbox = []; res = { ok: true }; break;
        case "redeem": res = await redeem(G, uid, p.code); break;
        case "topup": res = await submitTopup(uid, prof, p, cfg); break;
        case "skew": if (!ADMIN) throw "เฉพาะแอดมิน"; G.S.skew = (G.S.skew || 0) + int(p.hours, -240, 240) * 3600e3; res = { ok: true }; break;
        case "reset_me": if (!ADMIN) throw "เฉพาะแอดมิน"; G.S = fresh(); res = { ok: true }; break;
        default: return fail("คำสั่งไม่ถูกต้อง");
      }
      try { await saveState(uid, G.S, ver); break; } catch (e) { if (attempt === 2 || a === "redeem" || a === "topup") throw e; }
    }
    const t0 = Date.now(); if (t0 - new Date(prof.last_seen).getTime() > 60e3) sb.from("profiles").update({ last_seen: new Date(t0).toISOString() }).eq("id", uid).then(() => {});
    const { data: tops } = await sb.from("topups").select("id,baht,stars,status,reason,created_at").eq("user_id", uid).order("created_at", { ascending: false }).limit(8);
    return out({ res, state: G.S, now: G.now(), profile: { name: prof.name, login: prof.login, code: prof.code, admin: ADMIN }, cfg: { pay: cfg.pay, ann: cfg.ann, maint: cfg.maint, packs: cfg.packs }, topups: tops || [] });
  } catch (e) {
    return fail(typeof e === "string" ? e : "เกิดข้อผิดพลาด ลองใหม่อีกครั้ง", typeof e === "string" ? 400 : 500);
  }
});
